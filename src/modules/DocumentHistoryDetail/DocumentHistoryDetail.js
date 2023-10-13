import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ReactFlow, {
  addEdge,
  ConnectionLineType,
  useNodesState,
  useEdgesState,
  Controls
} from 'reactflow';
import dagre from 'dagre';
import 'reactflow/dist/style.css';
import { useTranslation } from 'react-i18next';

import './DocumentHistory.css';
import CustomCard from './CustomCard';
import { SmartStepEdge } from '@tisoap/react-flow-smart-edge';
import { Box } from '@mui/material';
import { ArrowBack } from 'utils/images';
import CustomEdge from './CustomEdge';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import InfoIcon from '@mui/icons-material/Info';

const dagreGraph = new dagre.graphlib.Graph();
dagreGraph.setDefaultEdgeLabel(() => ({}));

const nodeWidth = 172;
const nodeHeight = 200;

const getLayoutedElements = (nodes, edges, direction = 'TB') => {
  const isHorizontal = direction === 'LR';
  dagreGraph.setGraph({ rankdir: direction });

  nodes.forEach((node) => {
    dagreGraph.setNode(node.id, { width: nodeWidth, height: nodeHeight });
  });

  edges.forEach((edge) => {
    dagreGraph.setEdge(edge.source, edge.target);
  });

  dagre.layout(dagreGraph);

  nodes.forEach((node) => {
    const nodeWithPosition = dagreGraph.node(node.id);
    node.targetPosition = isHorizontal ? 'left' : 'top';
    node.sourcePosition = isHorizontal ? 'right' : 'bottom';
    node.position = {
      x: nodeWithPosition.x - nodeWidth / 2,
      y: nodeWithPosition.y - nodeHeight / 2
    };

    if (node?.groupId && !node?.isTopParent) {
      node.hidden = true;
    }
    return node;
  });

  return { nodes, edges };
};

const nodeTypes = {
  CustomCard: CustomCard
};

const edgeTypes = {
  smartstep: SmartStepEdge,
  custom: CustomEdge
};

const DocumentHistoryDetail = ({
  initialNodes,
  initialEdges,
  hoverEdgesList,
  showCompareModal,
  resetCompareSelected,
  documentLinkClick
}) => {
  const { t } = useTranslation();
  const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(
    initialNodes,
    initialEdges
  );
  const [nodes, setNodes, onNodesChange] = useNodesState();
  const [edges, setEdges, onEdgesChange] = useEdgesState(layoutedEdges);
  const [showGuideLine, setShowGuidLine] = useState(false);
  useEffect(() => {
    if (nodes !== undefined) {
      let compareListFilter = nodes.filter((e) => e.data.isCompareSelected === true);
      if (compareListFilter.length >= 2) {
        showCompareModal(compareListFilter);
      }
    }
  }, [nodes]);

  useEffect(() => {
    if (resetCompareSelected === true) {
      setNodes((nds) =>
        nds.map((node) => {
          return {
            ...node,
            data: {
              ...node.data,
              isCompareSelected: false
            }
          };
        })
      );
    }
  }, [resetCompareSelected]);

  useEffect(() => {
    const onNodeHover = (id) => {
      if (hoverEdgesList.length > 0) {
        let hoverArray = hoverEdgesList.filter((e) => e.target == id);
        hoverArray.forEach((edges) => {
          setEdges((eds) => addEdge({ ...edges }, eds));
        });
      }
    };
    // eslint-disable-next-line no-unused-vars
    const onNodeOutHover = (id) => {
      setEdges((eds) => eds.filter((e) => !e.isHoverEdge));
    };
    const showNodesGroup = (groupId) => {
      setEdges((eds) =>
        eds.map((edge) => {
          if (edge?.groupId === groupId) {
            edge.hidden = false;
          }
          return edge;
        })
      );

      setNodes((nds) =>
        nds.map((node) => {
          if (node.groupId !== groupId) {
            return node;
          }

          if (node?.isTopParent && node.groupId === groupId) {
            return {
              ...node,
              data: {
                ...node.data,
                isExpand: true
              }
            };
          } else {
            return {
              ...node,
              hidden: false,
              data: {
                ...node.data
              }
            };
          }
        })
      );
    };

    const hideNodesGroup = (groupId) => {
      setEdges((eds) =>
        eds.map((edge) => {
          if (edge?.groupId === groupId) {
            edge.hidden = true;
          }
          return edge;
        })
      );

      setNodes((nds) =>
        nds.map((node) => {
          if (node.groupId !== groupId) {
            return node;
          }

          if (node?.isTopParent && node.groupId === groupId) {
            return {
              ...node,
              data: {
                ...node.data,
                isExpand: false
              }
            };
          } else {
            return {
              ...node,
              hidden: true,
              data: {
                ...node.data
              }
            };
          }
        })
      );
    };

    const onCompareSelect = (data) => {
      setNodes((nds) =>
        nds.map((node) => {
          if (node.id !== data.id) {
            return node;
          } else {
            return {
              ...node,
              data: {
                ...node.data,
                isCompareSelected: !node.data.isCompareSelected
              }
            };
          }
        })
      );
    };

    const onEditLink = (e, data) => {
      documentLinkClick(e, data);
    };

    let nodeList = layoutedNodes;
    nodeList.forEach((node) => {
      node.data.onNodeHover = onNodeHover;
      node.data.onNodeOutHover = onNodeOutHover;
      node.data.showNodesGroup = showNodesGroup;
      node.data.hideNodesGroup = hideNodesGroup;
      node.data.onCompareSelect = onCompareSelect;
      node.data.onEditLink = onEditLink;
      return node;
    });
    setNodes(nodeList);
  }, []);

  const onConnect = useCallback(
    (params) =>
      setEdges((eds) =>
        addEdge({ ...params, type: ConnectionLineType.SmoothStep, animated: true }, eds)
      ),
    []
  );

  return (
    <div className="chartWrapperOuter">
      <div className="chartWrapper">
        <Box>
          <p onClick={() => history.back()} className={'pointer backLink'}>
            <img src={ArrowBack} alt="back" /> {t('back')}
          </p>
        </Box>
        <Box
          component="span"
          className={`pointer infoArrow`}
          onClick={() => setShowGuidLine(!showGuideLine)}>
          {showGuideLine ? (
            <KeyboardDoubleArrowRightIcon />
          ) : (
            <InfoIcon color="primary" titleAccess="Click here for guidelines" />
          )}
        </Box>
        <div className={`guidancePart ${showGuideLine ? 'hideInfo' : 'showInfo'}`}>
          <h3>Guideline</h3>
          <ul>
            <li className="infoList">
              <button>Internal Draft</button>
              <span className="arrow"></span>
              <label>Internal Version</label>
            </li>
            <li className="infoList shared">
              <button>Shared</button>
              <span className="arrow"></span>
              <label>Document Shared </label>
            </li>
            <li className="infoList redline">
              <button>Redline Doc</button>
              <span className="arrow"></span>
              <label> Automatic Redline</label>
            </li>
            <li className="infoList compare">
              <button> Compare</button>
              <span className="arrow"></span>
              <label> Document Compare</label>
            </li>
          </ul>
        </div>
        <div className="layoutflow">
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            connectionLineType={ConnectionLineType.SmoothStep}
            fitView
            nodeTypes={nodeTypes}
            edgeTypes={edgeTypes}
            proOptions={{ hideAttribution: true }}
            nodesDraggable={false}
            // zoomOnScroll={false}
            // preventScrolling={false}
            // panOnDrag={false}
            // possibleAttribute={false}
            // // panOnScroll={false}
          >
            <Controls />
          </ReactFlow>
        </div>
      </div>
    </div>
  );
};

DocumentHistoryDetail.propTypes = {
  initialNodes: PropTypes.array,
  initialEdges: PropTypes.array,
  hoverEdgesList: PropTypes.array,
  showCompareModal: PropTypes.func,
  resetCompareSelected: PropTypes.bool,
  documentLinkClick: PropTypes.func
};

export default DocumentHistoryDetail;

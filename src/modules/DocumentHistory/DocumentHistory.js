/* eslint-disable no-unused-vars */
// import { HistorySidebar } from 'components';
// import React from 'react';

// function DocumentHistory() {
//   return (
//     <div>
//       <HistorySidebar />
//       <h1>Hellworld</h1>
//     </div>
//   );
// }

// export default DocumentHistory;
import React, { useCallback, useEffect } from 'react';
import ReactFlow, {
  addEdge,
  ConnectionLineType,
  useNodesState,
  useEdgesState,
  Controls,
  updateEdge
} from 'reactflow';
import dagre from 'dagre';
import 'reactflow/dist/style.css';

import { initialNodes, initialEdges } from './NodeEdge';

import './DocumentHistory.css';
import CustomCard from './CustomCard';
import { SmartStepEdge, SmartBezierEdge, SmartStraightEdge } from '@tisoap/react-flow-smart-edge';
import CustomEdge from './CustomEdge';

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

    // We  are shifting the dagrenode position (anchor=center center) to the top left
    // so it matches the React Flow node anchor point (top left).
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

const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(
  initialNodes,
  initialEdges
);

const nodeTypes = {
  CustomCard: CustomCard
};

const edgeTypes = {
  smartstep: SmartBezierEdge,
  custom: CustomEdge
};

const DocumentHistory = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState();
  const [edges, setEdges, onEdgesChange] = useEdgesState(layoutedEdges);

  useEffect(() => {
    const showEdge = (id) => (nodeOrEdge) => {
      if ((nodeOrEdge.source === id || nodeOrEdge.target === id) && nodeOrEdge.isCompareLine) {
        nodeOrEdge.hidden = false;
      }
      return nodeOrEdge;
    };

    const hideEdge = () => (nodeOrEdge) => {
      if (nodeOrEdge.isCompareLine) {
        nodeOrEdge.hidden = true;
      }
      return nodeOrEdge;
    };

    const onNodeHover = (id) => {
      setEdges((eds) => eds.map(showEdge(id)));
    };
    const onNodeOutHover = (id) => {
      setEdges((eds) => eds.map(hideEdge()));
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
    let nodeList = layoutedNodes;
    nodeList.forEach((node) => {
      node.data.onNodeHover = onNodeHover;
      node.data.onNodeOutHover = onNodeOutHover;
      node.data.showNodesGroup = showNodesGroup;
      node.data.hideNodesGroup = hideNodesGroup;
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
    <div style={{ width: '100%', height: '90vh' }}>
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
  );
};

export default DocumentHistory;

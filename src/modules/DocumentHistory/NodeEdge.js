import { MarkerType } from 'reactflow';
const position = { x: 0, y: 0 };

export const initialNodes = [
  {
    id: 'D1',
    type: 'CustomCard',
    data: {
      label: 'Non-Disclosure Agreement(D1)',
      cardType: 'internal',
      name: 'Tom Jesper',
      modified_date: '10/01/2022 10:35pm'
    },
    position
  },
  {
    id: 'D2',
    type: 'CustomCard',
    data: {
      label: 'Non-Disclosure Agreement(D2)',
      cardType: 'internal',
      name: 'Tom Jesper',
      modified_date: '10/01/2022 10:35pm'
    },
    position
  },
  {
    id: 'D5',
    type: 'CustomCard',
    data: {
      label: 'Non-Disclosure Agreement(D5)',
      name: 'Tom Jesper',
      modified_date: '10/01/2022 10:35pm',
      groupId: 10,
      isExpand: false
    },
    isTopParent: true,
    groupId: 10,
    position
  },
  {
    id: 'D5.1',
    type: 'CustomCard',
    data: {
      label: 'Non-Disclosure Agreement(5--1)',
      cardType: 'internal',
      name: 'Tom Jesper',
      modified_date: '10/01/2022 10:35pm'
    },
    position,
    groupId: 10
  },
  {
    id: 'D5.2',
    type: 'CustomCard',
    data: {
      label: 'Non-Disclosure Agreement(5--2)',
      cardType: 'internal',
      name: 'Tom Jesper',
      modified_date: '10/01/2022 10:35pm'
    },
    position,
    groupId: 10
  },
  {
    id: 'D5.3',
    type: 'CustomCard',
    data: {
      label: 'Non-Disclosure Agreement(5--3)',
      cardType: 'internal',
      name: 'Tom Jesper',
      modified_date: '10/01/2022 10:35pm'
    },
    position,
    groupId: 10
  },
  {
    id: 'D3',
    type: 'CustomCard',
    data: {
      label: 'Non-Disclosure Agreement(D3)',
      cardType: 'internal',
      name: 'Tom Jesper',
      modified_date: '10/01/2022 10:35pm'
    },
    position
  },
  {
    id: 'D4',
    type: 'CustomCard',
    data: {
      label: 'Non-Disclosure Agreement(D4)',
      cardType: 'share',
      name: 'Tom Jesper',
      modified_date: '10/01/2022 10:35pm'
    },
    position
  },
  {
    id: 'D6',
    type: 'CustomCard',
    data: {
      label: 'Non-Disclosure Agreement(D6)',
      name: 'Tom Jesper',
      modified_date: '10/01/2022 10:35pm'
    },
    position
  },
  {
    id: 'D12',
    type: 'CustomCard',
    data: {
      label: 'Non-Disclosure Agreement(D12)',
      cardType: 'compare',
      name: 'Tom Jesper',
      modified_date: '10/01/2022 10:35pm'
    },
    position
  },
  {
    id: 'D7',
    type: 'CustomCard',
    data: {
      label: 'Non-Disclosure Agreement(D7)',
      cardType: 'share',
      name: 'Jane Cooper',
      modified_date: '10/01/2022 10:35pm'
    },
    position
  },
  {
    id: 'D10',
    type: 'CustomCard',
    data: {
      label: 'Non-Disclosure Agreement(D10)',
      cardType: 'share',
      name: 'Jane Cooper',
      modified_date: '10/01/2022 10:35pm'
    },
    position
  },
  {
    id: 'D11',
    type: 'CustomCard',
    data: {
      label: 'Non-Disclosure Agreement(D11)',
      cardType: 'share',
      name: 'Jane Cooper',
      modified_date: '10/01/2022 10:35pm'
    },
    position
  },
  {
    id: 'D8',
    type: 'CustomCard',
    data: {
      label: 'Non-Disclosure Agreement(D8)',
      cardType: 'share',
      name: 'Robert Fox',
      modified_date: '10/01/2022 10:35pm'
    },
    position
  },
  {
    id: 'D9',
    type: 'CustomCard',
    data: {
      label: 'Non-Disclosure Agreement(D9)',
      cardType: 'share',
      name: 'Kristin Watson',
      modified_date: '10/01/2022 10:35pm'
    },
    position
  },
  {
    id: 'D13',
    type: 'CustomCard',
    data: {
      label: 'Non-Disclosure Agreement(D13)',
      cardType: 'redline',
      name: 'Tom Jesper',
      modified_date: '10/01/2022 10:35pm'
    },
    position
  },
  {
    id: 'D14',
    type: 'CustomCard',
    data: {
      label: 'Non-Disclosure Agreement(D14)',
      cardType: 'redline',
      name: 'Jane Cooper',
      modified_date: '10/01/2022 10:35pm'
    },
    position
  },
  {
    id: 'D15',
    type: 'CustomCard',
    data: {
      label: 'Non-Disclosure Agreement(D15)',
      cardType: 'redline',
      name: 'Robert Fox',
      modified_date: '10/01/2022 10:35pm'
    },
    position
  }
];

export const initialEdges = [
  {
    id: 'D1_D2',
    source: 'D1',
    target: 'D2',
    type: 'custom',
    sourceHandle: 'internal',
    interactionWidth: 0,
    style: { stroke: 'black' },
    markerEnd: { type: MarkerType.Arrow }
  },
  {
    id: 'D2-D5',
    source: 'D2',
    target: 'D5',
    type: 'smoothstep',
    markerEnd: { type: MarkerType.Arrow }
  },
  {
    id: 'D5_D5.1',
    source: 'D5',
    target: 'D5.1',
    type: 'smoothstep',
    markerEnd: { type: MarkerType.Arrow },
    groupId: 10
  },
  {
    id: 'D5.1_D5.2',
    source: 'D5.1',
    target: 'D5.2',
    type: 'smoothstep',
    markerEnd: { type: MarkerType.Arrow },
    groupId: 10
  },
  {
    id: 'D5.2_D5.3',
    source: 'D5.2',
    target: 'D5.3',
    type: 'smoothstep',
    markerEnd: {
      type: MarkerType.Arrow
    },
    groupId: 10
  },
  {
    id: 'D1_D3',
    source: 'D1',
    target: 'D3',
    type: 'smoothstep',
    sourceHandle: 'compare',
    style: { stroke: 'red' },
    markerEnd: {
      type: MarkerType.Arrow
    }
  },
  {
    id: 'D1_D4',
    source: 'D1',
    target: 'D4',
    type: 'smoothstep',
    markerEnd: {
      type: MarkerType.Arrow
    }
  },
  {
    id: 'D4_D13',
    source: 'D4',
    target: 'D13',
    style: { stroke: 'red', strokeDasharray: 5 },
    label: '',
    type: 'smartstep',
    markerEnd: {
      type: MarkerType.Arrow,
      color: 'red'
    },
    hidden: true,
    isCompareLine: true
  },
  {
    id: 'D4_D14',
    source: 'D4',
    target: 'D14',
    style: { stroke: 'red', strokeDasharray: 5 },
    label: '',
    type: 'smartstep',
    markerEnd: {
      type: MarkerType.Arrow,
      color: 'red'
    },
    hidden: true,
    isCompareLine: true
  },
  {
    id: 'D4_D15',
    source: 'D4',
    target: 'D15',
    style: { stroke: 'red', strokeDasharray: 5 },
    label: '',
    type: 'smartstep',
    markerEnd: {
      type: MarkerType.Arrow,
      color: 'red'
    },
    hidden: true,
    isCompareLine: true
  },
  {
    id: 'D4_D6',
    source: 'D4',
    target: 'D6',
    type: 'smoothstep',
    markerEnd: {
      type: MarkerType.Arrow
    }
  },
  {
    id: 'D6_D12',
    source: 'D6',
    target: 'D12',
    type: 'smoothstep',
    style: { stroke: 'red' },
    markerEnd: {
      type: MarkerType.Arrow,
      color: 'red'
    }
  },
  {
    id: 'D12_11',
    source: 'D12',
    target: 'D11',
    type: 'smartstep',
    style: { stroke: 'red' },
    markerEnd: {
      type: MarkerType.Arrow,
      color: 'red'
    },
    hidden: true,
    isCompareLine: true
  },
  {
    id: 'D4_D7',
    source: 'D4',
    target: 'D7',
    type: 'smoothstep',
    style: { stroke: 'green', strokeDasharray: 5 },
    markerEnd: {
      type: MarkerType.Arrow,
      color: 'green'
    }
  },
  {
    id: 'D7_10',
    source: 'D7',
    target: 'D10',
    type: 'smoothstep',
    style: { stroke: 'green', strokeDasharray: 5 },
    markerEnd: {
      type: MarkerType.Arrow,
      color: 'green'
    }
  },
  {
    id: 'D10_11',
    source: 'D10',
    target: 'D11',
    type: 'smoothstep',
    style: { stroke: 'green', strokeDasharray: 5 },
    markerEnd: {
      type: MarkerType.Arrow,
      color: 'green'
    }
  },
  {
    id: 'D4_D8',
    source: 'D4',
    target: 'D8',
    type: 'smoothstep',
    style: { stroke: 'green', strokeDasharray: 5 },
    markerEnd: {
      type: MarkerType.Arrow,
      color: 'green'
    }
  },
  {
    id: 'D4_D9',
    source: 'D4',
    target: 'D9',
    type: 'smoothstep',
    style: { stroke: 'green', strokeDasharray: 5 },
    markerEnd: {
      type: MarkerType.Arrow,
      color: 'green'
    }
  },
  {
    id: 'D9_D13',
    source: 'D9',
    target: 'D13',
    type: 'smoothstep',
    style: { stroke: 'green', strokeDasharray: 5 },
    markerEnd: {
      type: MarkerType.Arrow,
      color: 'green'
    }
  },
  {
    id: 'D9_D14',
    source: 'D9',
    target: 'D14',
    type: 'smoothstep',
    style: { stroke: 'green', strokeDasharray: 5 },
    markerEnd: {
      type: MarkerType.Arrow,
      color: 'green'
    }
  },
  {
    id: 'D9_D15',
    source: 'D9',
    target: 'D15',
    type: 'smoothstep',
    style: { stroke: 'green', strokeDasharray: 5 },
    markerEnd: {
      type: MarkerType.Arrow,
      color: 'green'
    }
  }
];

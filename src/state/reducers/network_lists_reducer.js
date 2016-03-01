
const pop = [
  {
    title: "Metabolism in Orcas",
    nodes: 75793,
    edges: 173874
  },
  {
    title: "Human Throat Cancer",
    nodes: 34011,
    edges: 23044
  },
  {
    title: "ADT Driven Subset Computation",
    nodes: 11,
    edges: 5
  },
  {
    title: "Proteins Interacting with Melanoma Gene Products",
    nodes: 1933,
    edges: 97578
  },
  {
    title: "Parkinson's Disease Map",
    ndoes: 434,
    edges: 43434
  },
  {
    title: "RiceCyc v3.3",
    nodes: 334334,
    edges: 434
  },
  {
    title: "NCID traffics to Nucleus",
    nodes: 434334,
    edges: 43434
  }
]

const recent = [
  {
    title: "Metabolism in Orcas",
    nodes: 75793,
    edges: 173874
  }
]

const defaultNetworkLists = {
  Search: [],
  Popular: pop,
  Recent: recent,
  Human: pop,
  Mouse: pop,
  Marine: pop
}

export default function networkLists(state = defaultNetworkLists, action) {
    return state
}

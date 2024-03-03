const containerModalDataTable = document.querySelector('.containerModalDataTable');

const allResultsBttn = document.querySelector('.allResultsBttn');


let dataTableCols = [
  {
    name: 'Strain',
    id: 'STRAIN',
    type: 'string',
  },
  {
    name: 'Chromossome',
    id: 'CHROMOSSOME',
    type: 'string',
  },
  {
    name: 'Function',
    id: 'FUNCTION',
    type: 'string',
  },
  {
    name: 'Id',
    id: 'ID',
    type: 'string',
  },
  {
    name: 'Description',
    id: 'DESCRIPTION',
    type: 'string',
  },
];

let dataTableRows = [
  {
    STRAIN: 'C1074P',
    CHROMOSSOME: 'chr1a',
    FUNCTION: 'gene',
    ID: 'TgrandC1074PG00000005314',
    DESCRIPTION: 'LRR receptor-like serine/threonine-protein kinase RCH1',
    completeData: [
      {
        title: 'Strain',
        value: 'C1074P',
      },
      {
        title: 'Chromossome',
        value: 'chr1a',
      },
      {
        title: 'Software',
        value: '-',
      },
      {
        title: 'Function',
        value: 'gene',
      },
    ],
  },
  {
    STRAIN: 'C1074P',
    CHROMOSSOME: 'chr1a',
    FUNCTION: 'mRNA',
    ID: 'TgrandC1074PG00000005314.1',
    DESCRIPTION: 'LRR receptor-like serine/threonine-protein kinase RCH1',
    completeData: [
      {
        title: 'Strain',
        value: 'CCCC',
      },
      {
        title: 'Chromossome',
        value: 'cccccc',
      },
      {
        title: 'Software',
        value: '---------',
      },
      {
        title: 'Function',
        value: 'geneeeeee',
      },
    ],
  },
  {
    STRAIN: 'C1074P',
    CHROMOSSOME: 'chr1b',
    FUNCTION: 'gene',
    ID: 'TgrandC1074PG00000018752',
    DESCRIPTION: 'LRR receptor-like serine/threonine-protein kinase RCH1',
    completeData: [
      {
        title: 'Strain',
        value: 'C1074Pfffffff',
      },
      {
        title: 'Chromossome',
        value: 'chr1aaaaaaaaa',
      },
      {
        title: 'Software',
        value: '-ffff',
      },
      {
        title: 'Function',
        value: 'geneaaaaaaa',
      },
    ],
  },
  {
    STRAIN: 'C1074P',
    CHROMOSSOME: 'chr1b',
    FUNCTION: 'mRNA',
    ID: 'TgrandC1074PG00000018752.1',
    DESCRIPTION: 'LRR receptor-like serine/threonine-protein kinase RCH1',
    completeData: [
      {
        title: 'Strain',
        value: 'C1074P',
      },
      {
        title: 'Chromossome',
        value: 'chr1a',
      },
      {
        title: 'Software',
        value: '-',
      },
      {
        title: 'Function',
        value: 'gene',
      },
    ],
  },
  {
    STRAIN: 'C1074P',
    CHROMOSSOME: 'chr3a',
    FUNCTION: 'gene',
    ID: 'TgrandC1074PG00000036246',
    DESCRIPTION: 'Putative E3 ubiquitin-protein ligase MARCH10',
    completeData: [
      {
        title: 'Strain',
        value: 'C1074P',
      },
      {
        title: 'Chromossome',
        value: 'chr1a',
      },
      {
        title: 'Software',
        value: '-',
      },
      {
        title: 'Function',
        value: 'gene',
      },
    ],
  },
];

const dataTableRowsMAIN = [
  {
    STRAIN: 'C1074P',
    CHROMOSSOME: 'chr1a',
    FUNCTION: 'gene',
    ID: 'TgrandC1074PG00000005314',
    DESCRIPTION: 'LRR receptor-like serine/threonine-protein kinase RCH1',
  },
  {
    STRAIN: 'C1074P',
    CHROMOSSOME: 'chr1a',
    FUNCTION: 'mRNA',
    ID: 'TgrandC1074PG00000005314.1',
    DESCRIPTION: 'LRR receptor-like serine/threonine-protein kinase RCH1',
  },
  {
    STRAIN: 'C1074P',
    CHROMOSSOME: 'chr1b',
    FUNCTION: 'gene',
    ID: 'TgrandC1074PG00000018752',
    DESCRIPTION: 'LRR receptor-like serine/threonine-protein kinase RCH1',
  },
  {
    STRAIN: 'C1074P',
    CHROMOSSOME: 'chr1b',
    FUNCTION: 'mRNA',
    ID: 'TgrandC1074PG00000018752.1',
    DESCRIPTION: 'LRR receptor-like serine/threonine-protein kinase RCH1',
  },
  {
    STRAIN: 'C1074P',
    CHROMOSSOME: 'chr3a',
    FUNCTION: 'gene',
    ID: 'TgrandC1074PG00000036246',
    DESCRIPTION: 'Putative E3 ubiquitin-protein ligase MARCH10',
  },
  {
    STRAIN: 'C1074P',
    CHROMOSSOME: 'chr1a',
    FUNCTION: 'gene',
    ID: 'TgrandC1074PG00000005314',
    DESCRIPTION: 'LRR receptor-like serine/threonine-protein kinase RCH1',
  },
  {
    STRAIN: 'C1074P',
    CHROMOSSOME: 'chr1a',
    FUNCTION: 'mRNA',
    ID: 'TgrandC1074PG00000005314.1',
    DESCRIPTION: 'LRR receptor-like serine/threonine-protein kinase RCH1',
  },
  {
    STRAIN: 'TESTE1',
    CHROMOSSOME: 'chr1b',
    FUNCTION: 'gene',
    ID: 'TgrandC1074PG00000018752',
    DESCRIPTION: 'LRR receptor-like serine/threonine-protein kinase RCH1',
  },
  {
    STRAIN: 'C1074P',
    CHROMOSSOME: 'chr1b',
    FUNCTION: 'mRNA',
    ID: 'TgrandC1074PG00000018752.1',
    DESCRIPTION: 'LRR receptor-like serine/threonine-protein kinase RCH1',
  },
  {
    STRAIN: 'C1074P',
    CHROMOSSOME: 'chr3a',
    FUNCTION: 'gene',
    ID: 'TgrandC1074PG00000036246',
    DESCRIPTION: 'Putative E3 ubiquitin-protein ligase MARCH10',
  },
  {
    STRAIN: 'C1074P',
    CHROMOSSOME: 'chr1a',
    FUNCTION: 'TESTE2',
    ID: 'TgrandC1074PG00000005314',
    DESCRIPTION: 'LRR receptor-like serine/threonine-protein kinase RCH1',
  },
  {
    STRAIN: 'C1074P',
    CHROMOSSOME: 'chr1a',
    FUNCTION: 'mRNA',
    ID: 'TgrandC1074PG00000005314.1',
    DESCRIPTION: 'LRR receptor-like serine/threonine-protein kinase RCH1',
  },
  {
    STRAIN: 'C1074P',
    CHROMOSSOME: 'chr1b',
    FUNCTION: 'gene',
    ID: 'TgrandC1074PG00000018752',
    DESCRIPTION: 'LRR receptor-like serine/threonine-protein kinase RCH1',
  },
  {
    STRAIN: 'C1074P',
    CHROMOSSOME: 'chr1b',
    FUNCTION: 'mRNA',
    ID: 'TgrandC1074PG00000018752.1',
    DESCRIPTION: 'LRR receptor-like serine/threonine-protein kinase RCH1',
  },
  {
    STRAIN: 'C1074P',
    CHROMOSSOME: 'chr3a',
    FUNCTION: 'gene',
    ID: 'TgrandC1074PG00000036246',
    DESCRIPTION: 'Putative E3 ubiquitin-protein ligase MARCH10',
  },
  {
    STRAIN: 'C1074P',
    CHROMOSSOME: 'chr1a',
    FUNCTION: 'gene',
    ID: 'TgrandC1074PG00000005314',
    DESCRIPTION: 'LRR receptor-like serine/threonine-protein kinase RCH1',
  },
  {
    STRAIN: 'C1074P',
    CHROMOSSOME: 'chr1a',
    FUNCTION: 'mRNA',
    ID: 'TgrandC1074PG00000005314.1',
    DESCRIPTION: 'LRR receptor-like serine/threonine-protein kinase RCH1',
  },
  {
    STRAIN: 'C1074P',
    CHROMOSSOME: 'chr1b',
    FUNCTION: 'gene',
    ID: 'TgrandC1074PG00000018752',
    DESCRIPTION: 'LRR receptor-like serine/threonine-protein kinase RCH1',
  },
  {
    STRAIN: 'C1074P',
    CHROMOSSOME: 'chr1b',
    FUNCTION: 'mRNA',
    ID: 'TgrandC1074PG00000018752.1',
    DESCRIPTION: 'LRR receptor-like serine/threonine-protein kinase RCH1',
  },
  {
    STRAIN: 'C1074P',
    CHROMOSSOME: 'chr3a',
    FUNCTION: 'gene',
    ID: 'TgrandC1074PG00000036246',
    DESCRIPTION: 'Putative E3 ubiquitin-protein ligase MARCH10',
  },
  {
    STRAIN: 'C1074P',
    CHROMOSSOME: 'chr1a',
    FUNCTION: 'gene',
    ID: 'TgrandC1074PG00000005314',
    DESCRIPTION: 'LRR receptor-like serine/threonine-protein kinase RCH1',
  },
  {
    STRAIN: 'C1074P',
    CHROMOSSOME: 'chr1a',
    FUNCTION: 'mRNA',
    ID: 'TgrandC1074PG00000005314.1',
    DESCRIPTION: 'LRR receptor-like serine/threonine-protein kinase RCH1',
  },
  {
    STRAIN: 'C1074P',
    CHROMOSSOME: 'chr1b',
    FUNCTION: 'gene',
    ID: 'TgrandC1074PG00000018752',
    DESCRIPTION: 'LRR receptor-like serine/threonine-protein kinase RCH1',
  },
  {
    STRAIN: 'C1074P',
    CHROMOSSOME: 'chr1b',
    FUNCTION: 'mRNA',
    ID: 'TgrandC1074PG00000018752.1',
    DESCRIPTION: 'LRR receptor-like serine/threonine-protein kinase RCH1',
  },
  {
    STRAIN: 'C1074P',
    CHROMOSSOME: 'chr3a',
    FUNCTION: 'gene',
    ID: 'TgrandC1074PG00000036246',
    DESCRIPTION: 'Putative E3 ubiquitin-protein ligase MARCH10',
  },
  {
    STRAIN: 'C1074P',
    CHROMOSSOME: 'chr1a',
    FUNCTION: 'gene',
    ID: 'TgrandC1074PG00000005314',
    DESCRIPTION: 'LRR receptor-like serine/threonine-protein kinase RCH1',
  },
  {
    STRAIN: 'C1074P',
    CHROMOSSOME: 'chr1a',
    FUNCTION: 'mRNA',
    ID: 'TgrandC1074PG00000005314.1',
    DESCRIPTION: 'LRR receptor-like serine/threonine-protein kinase RCH1',
  },
  {
    STRAIN: 'C1074P',
    CHROMOSSOME: 'chr1b',
    FUNCTION: 'gene',
    ID: 'TgrandC1074PG00000018752',
    DESCRIPTION: 'LRR receptor-like serine/threonine-protein kinase RCH1',
  },
  {
    STRAIN: 'C1074P',
    CHROMOSSOME: 'chr1b',
    FUNCTION: 'mRNA',
    ID: 'TgrandC1074PG00000018752.1',
    DESCRIPTION: 'LRR receptor-like serine/threonine-protein kinase RCH1',
  },
  {
    STRAIN: 'C1074P',
    CHROMOSSOME: 'chr3a',
    FUNCTION: 'gene',
    ID: 'TgrandC1074PG00000036246',
    DESCRIPTION: 'Putative E3 ubiquitin-protein ligase MARCH10',
  },
  {
    STRAIN: 'C1074P',
    CHROMOSSOME: 'chr1a',
    FUNCTION: 'gene',
    ID: 'TgrandC1074PG00000005314',
    DESCRIPTION: 'LRR receptor-like serine/threonine-protein kinase RCH1',
  },
  {
    STRAIN: 'C1074P',
    CHROMOSSOME: 'chr1a',
    FUNCTION: 'mRNA',
    ID: 'TgrandC1074PG00000005314.1',
    DESCRIPTION: 'LRR receptor-like serine/threonine-protein kinase RCH1',
  },
  {
    STRAIN: 'C1074P',
    CHROMOSSOME: 'chr1b',
    FUNCTION: 'gene',
    ID: 'TgrandC1074PG00000018752',
    DESCRIPTION: 'LRR receptor-like serine/threonine-protein kinase RCH1',
  },
  {
    STRAIN: 'C1074P',
    CHROMOSSOME: 'chr1b',
    FUNCTION: 'mRNA',
    ID: 'TgrandC1074PG00000018752.1',
    DESCRIPTION: 'LRR receptor-like serine/threonine-protein kinase RCH1',
  },
  {
    STRAIN: 'C1074P',
    CHROMOSSOME: 'chr3a',
    FUNCTION: 'gene',
    ID: 'TgrandC1074PG00000036246',
    DESCRIPTION: 'Putative E3 ubiquitin-protein ligase MARCH10',
  },
  {
    STRAIN: 'C1074P',
    CHROMOSSOME: 'chr1a',
    FUNCTION: 'gene',
    ID: 'TgrandC1074PG00000005314',
    DESCRIPTION: 'LRR receptor-like serine/threonine-protein kinase RCH1',
  },
  {
    STRAIN: 'C1074P',
    CHROMOSSOME: 'chr1a',
    FUNCTION: 'mRNA',
    ID: 'TgrandC1074PG00000005314.1',
    DESCRIPTION: 'LRR receptor-like serine/threonine-protein kinase RCH1',
  },
  {
    STRAIN: 'C1074P',
    CHROMOSSOME: 'chr1b',
    FUNCTION: 'gene',
    ID: 'TgrandC1074PG00000018752',
    DESCRIPTION: 'LRR receptor-like serine/threonine-protein kinase RCH1',
  },
  {
    STRAIN: 'C1074P',
    CHROMOSSOME: 'chr1b',
    FUNCTION: 'mRNA',
    ID: 'TgrandC1074PG00000018752.1',
    DESCRIPTION: 'LRR receptor-like serine/threonine-protein kinase RCH1',
  },
  {
    STRAIN: 'C1074P',
    CHROMOSSOME: 'chr3a',
    FUNCTION: 'gene',
    ID: 'TgrandC1074PG00000036246',
    DESCRIPTION: 'Putative E3 ubiquitin-protein ligase MARCH10',
  },
  {
    STRAIN: 'C1074P',
    CHROMOSSOME: 'chr1a',
    FUNCTION: 'gene',
    ID: 'TgrandC1074PG00000005314',
    DESCRIPTION: 'LRR receptor-like serine/threonine-protein kinase RCH1',
  },
  {
    STRAIN: 'C1074P',
    CHROMOSSOME: 'chr1a',
    FUNCTION: 'mRNA',
    ID: 'TgrandC1074PG00000005314.1',
    DESCRIPTION: 'LRR receptor-like serine/threonine-protein kinase RCH1',
  },
  {
    STRAIN: 'C1074P',
    CHROMOSSOME: 'chr1b',
    FUNCTION: 'gene',
    ID: 'TgrandC1074PG00000018752',
    DESCRIPTION: 'LRR receptor-like serine/threonine-protein kinase RCH1',
  },
  {
    STRAIN: 'C1074P',
    CHROMOSSOME: 'chr1b',
    FUNCTION: 'mRNA',
    ID: 'TgrandC1074PG00000018752.1',
    DESCRIPTION: 'LRR receptor-like serine/threonine-protein kinase RCH1',
  },
  {
    STRAIN: 'C1074P',
    CHROMOSSOME: 'chr3a',
    FUNCTION: 'gene',
    ID: 'TgrandC1074PG00000036246',
    DESCRIPTION: 'Putative E3 ubiquitin-protein ligase MARCH10',
  },
  {
    STRAIN: 'C1074P',
    CHROMOSSOME: 'chr1a',
    FUNCTION: 'gene',
    ID: 'TgrandC1074PG00000005314',
    DESCRIPTION: 'LRR receptor-like serine/threonine-protein kinase RCH1',
  },
  {
    STRAIN: 'C1074P',
    CHROMOSSOME: 'chr1a',
    FUNCTION: 'mRNA',
    ID: 'TgrandC1074PG00000005314.1',
    DESCRIPTION: 'LRR receptor-like serine/threonine-protein kinase RCH1',
  },
  {
    STRAIN: 'C1074P',
    CHROMOSSOME: 'chr1b',
    FUNCTION: 'gene',
    ID: 'TgrandC1074PG00000018752',
    DESCRIPTION: 'LRR receptor-like serine/threonine-protein kinase RCH1',
  },
  {
    STRAIN: 'C1074P',
    CHROMOSSOME: 'chr1b',
    FUNCTION: 'mRNA',
    ID: 'TgrandC1074PG00000018752.1',
    DESCRIPTION: 'LRR receptor-like serine/threonine-protein kinase RCH1',
  },
  {
    STRAIN: 'C1074P',
    CHROMOSSOME: 'chr3a',
    FUNCTION: 'gene',
    ID: 'TgrandC1074PG00000036246',
    DESCRIPTION: 'Putative E3 ubiquitin-protein ligase MARCH10',
  },
  {
    STRAIN: 'C1074P',
    CHROMOSSOME: 'chr1a',
    FUNCTION: 'gene',
    ID: 'TgrandC1074PG00000005314',
    DESCRIPTION: 'LRR receptor-like serine/threonine-protein kinase RCH1',
  },
  {
    STRAIN: 'C1074P',
    CHROMOSSOME: 'chr1a',
    FUNCTION: 'mRNA',
    ID: 'TgrandC1074PG00000005314.1',
    DESCRIPTION: 'LRR receptor-like serine/threonine-protein kinase RCH1',
  },
  {
    STRAIN: 'C1074P',
    CHROMOSSOME: 'chr1b',
    FUNCTION: 'gene',
    ID: 'TgrandC1074PG00000018752',
    DESCRIPTION: 'LRR receptor-like serine/threonine-protein kinase RCH1',
  },
  {
    STRAIN: 'C1074P',
    CHROMOSSOME: 'chr1b',
    FUNCTION: 'mRNA',
    ID: 'TgrandC1074PG00000018752.1',
    DESCRIPTION: 'LRR receptor-like serine/threonine-protein kinase RCH1',
  },
  {
    STRAIN: 'C1074P',
    CHROMOSSOME: 'chr3a',
    FUNCTION: 'gene',
    ID: 'TgrandC1074PG00000036246',
    DESCRIPTION: 'Putative E3 ubiquitin-protein ligase MARCH10',
  },
  {
    STRAIN: 'C1074P',
    CHROMOSSOME: 'chr1a',
    FUNCTION: 'gene',
    ID: 'TgrandC1074PG00000005314',
    DESCRIPTION: 'LRR receptor-like serine/threonine-protein kinase RCH1',
  },
  {
    STRAIN: 'C1074P',
    CHROMOSSOME: 'chr1a',
    FUNCTION: 'mRNA',
    ID: 'TgrandC1074PG00000005314.1',
    DESCRIPTION: 'LRR receptor-like serine/threonine-protein kinase RCH1',
  },
  {
    STRAIN: 'C1074P',
    CHROMOSSOME: 'chr1b',
    FUNCTION: 'gene',
    ID: 'TgrandC1074PG00000018752',
    DESCRIPTION: 'LRR receptor-like serine/threonine-protein kinase RCH1',
  },
  {
    STRAIN: 'C1074P',
    CHROMOSSOME: 'chr1b',
    FUNCTION: 'mRNA',
    ID: 'TgrandC1074PG00000018752.1',
    DESCRIPTION: 'LRR receptor-like serine/threonine-protein kinase RCH1',
  },
  {
    STRAIN: 'C1074P',
    CHROMOSSOME: 'chr3a',
    FUNCTION: 'gene',
    ID: 'TgrandC1074PG00000036246',
    DESCRIPTION: 'Putative E3 ubiquitin-protein ligase MARCH10',
  },
  {
    STRAIN: 'C1074P',
    CHROMOSSOME: 'chr1a',
    FUNCTION: 'gene',
    ID: 'TgrandC1074PG00000005314',
    DESCRIPTION: 'LRR receptor-like serine/threonine-protein kinase RCH1',
  },
  {
    STRAIN: 'C1074P',
    CHROMOSSOME: 'chr1a',
    FUNCTION: 'mRNA',
    ID: 'TgrandC1074PG00000005314.1',
    DESCRIPTION: 'LRR receptor-like serine/threonine-protein kinase RCH1',
  },
  {
    STRAIN: 'C1074P',
    CHROMOSSOME: 'chr1b',
    FUNCTION: 'gene',
    ID: 'TgrandC1074PG00000018752',
    DESCRIPTION: 'LRR receptor-like serine/threonine-protein kinase RCH1',
  },
  {
    STRAIN: 'C1074P',
    CHROMOSSOME: 'chr1b',
    FUNCTION: 'mRNA',
    ID: 'TgrandC1074PG00000018752.1',
    DESCRIPTION: 'LRR receptor-like serine/threonine-protein kinase RCH1',
  },
  {
    STRAIN: 'C1074P',
    CHROMOSSOME: 'chr3a',
    FUNCTION: 'gene',
    ID: 'TgrandC1074PG00000036246',
    DESCRIPTION: 'Putative E3 ubiquitin-protein ligase MARCH10',
  },
  {
    STRAIN: 'C1074P',
    CHROMOSSOME: 'chr1a',
    FUNCTION: 'gene',
    ID: 'TgrandC1074PG00000005314',
    DESCRIPTION: 'LRR receptor-like serine/threonine-protein kinase RCH1',
  },
  {
    STRAIN: 'C1074P',
    CHROMOSSOME: 'chr1a',
    FUNCTION: 'mRNA',
    ID: 'TgrandC1074PG00000005314.1',
    DESCRIPTION: 'LRR receptor-like serine/threonine-protein kinase RCH1',
  },
  {
    STRAIN: 'C1074P',
    CHROMOSSOME: 'chr1b',
    FUNCTION: 'gene',
    ID: 'TgrandC1074PG00000018752',
    DESCRIPTION: 'LRR receptor-like serine/threonine-protein kinase RCH1',
  },
  {
    STRAIN: 'C1074P',
    CHROMOSSOME: 'chr1b',
    FUNCTION: 'mRNA',
    ID: 'TgrandC1074PG00000018752.1',
    DESCRIPTION: 'LRR receptor-like serine/threonine-protein kinase RCH1',
  },
  {
    STRAIN: 'C1074P',
    CHROMOSSOME: 'chr3a',
    FUNCTION: 'gene',
    ID: 'TgrandC1074PG00000036246',
    DESCRIPTION: 'Putative E3 ubiquitin-protein ligase MARCH10',
  },
];


function getDataRow(data){
  console.log('[Debug] getDataRow:', data);

  createModalTable(data.completeData);
  containerModalDataTable.classList.add('showModalTable');
};

// ORDENA A LISTA DE FORMA CRESCENTE/DECRESCENTE
let ascendingSort = true; 
function sortDataTable(col, colId, colType){
  let colsHead = document.querySelectorAll('#dtHead tr th');

  colsHead.forEach((col) => {
    col.classList.remove('selected');

    if(col.id === colId){
      col.classList.add('selected');
      col.classList.toggle('iconAnimate');
    };
  });

  if(colType === 'string'){
    if(ascendingSort){
      dataTableRows.sort((data1, data2) => {
        let data1LC = data1[colId].toLowerCase();
        let data2LC = data2[colId].toLowerCase();
        return data1LC > data2LC ? 1 : -1;
      });
    } else {
      dataTableRows.sort((data1, data2) => {
        let data1LC = data1[colId].toLowerCase();
        let data2LC = data2[colId].toLowerCase();
        return data1LC < data2LC ? 1 : -1;
      });
    };
  } else {
    console.log('FALTA IMPLEMENTAR FUNÇÃO PARA "number".');
  };

  ascendingSort = !ascendingSort;
  createRows(dataTableCols, dataTableRows, 20);
};

const dtHead = document.querySelector('.dtHead');
const dtBody = document.querySelector('.dtBody');

function createColumns(cols){
  // COLUMNS
  let trHead = document.createElement('tr');
  cols.forEach((col) => {
    let th = document.createElement('th');
    th.innerText = col.name;
    th.id = col.id;

    let i = document.createElement('i');
    i.setAttribute('data-lucide', 'chevron-up');
    th.appendChild(i);

    th.addEventListener('click', () => sortDataTable(th, col.id, col.type));
    trHead.appendChild(th);
  });
  dtHead.appendChild(trHead);
};

function createRows(cols, rows, results){
  dtBody.innerHTML = '';
  // ROWS
  rows.forEach((row, index) => {
    if(index < results){
      let tr = document.createElement('tr');
      cols.forEach((col) => {
        let td = document.createElement('td');
        td.innerText = row[col.id];
        tr.appendChild(td);
      });
      tr.addEventListener('click', () => {getDataRow(row)});
      dtBody.appendChild(tr);
    };
  });
  
  allResultsBttn.innerText = `Mostrar todos (${rows.length})`;
  allResultsBttn.classList.remove('hideBttn');
};

createColumns(dataTableCols);
createRows(dataTableCols, dataTableRows, 20);

function setAllResultsBttn(){
  if(dataTableRows){
    allResultsBttn.innerText = `Mostrar todos (${dataTableRows.length})`;
  };
  allResultsBttn.addEventListener('click', () => {
    createRows(dataTableCols, dataTableRows, dataTableRows.length);
    allResultsBttn.classList.add('hideBttn');
  });
};

setAllResultsBttn();


const searchInput = document.querySelector('.searchInput');
const searchBttn = document.querySelector('.searchBttn');
const clearBttn = document.querySelector('.clearBttn');

searchBttn.addEventListener('click', () => {
  if(searchInput.value !== ''){
    let regex = new RegExp(`^${searchInput.value.toLowerCase()}`);

    dataTableRows = dataTableRowsMAIN.filter((row) => {
      let regexTest = false;
      dataTableCols.forEach((col) => {
        if(regex.test(row[col.id].toLowerCase())){
          regexTest = true;
        };
      });
      if(regexTest){
        return row;
      };
    });

    createRows(dataTableCols, dataTableRows, 20);
  };
});

clearBttn.addEventListener('click', () => {
  if(searchInput.value !== ''){
    searchInput.value = '';
    dataTableRows = dataTableRowsMAIN;
    createRows(dataTableCols, dataTableRowsMAIN, 20);
  };
});



const closeModalBttn = document.querySelector('.closeModalBttn');
closeModalBttn.addEventListener('click', () => {
  containerModalDataTable.classList.remove('showModalTable');
});


// ==================== MODAL TABLE ====================
const tbodyModal = document.querySelector('.tbodyModal');

/* const modalTabelData = [
  {
    title: 'Strain',
    value: 'C1074P',
  },
  {
    title: 'Chromossome',
    value: 'chr1a',
  },
  {
    title: 'Software',
    value: '-',
  },
  {
    title: 'Function',
    value: 'gene',
  },
]; */

function createModalTable(completeData){
  tbodyModal.innerHTML = '';

  completeData.forEach(data => {
    let tr = document.createElement('tr');

    let tdTitle = document.createElement('td');
    tdTitle.classList.add('fontBold');
    tdTitle.innerText = data.title;

    let tdValue = document.createElement('td');
    tdValue.innerText = data.value;

    tr.appendChild(tdTitle);
    tr.appendChild(tdValue);

    tbodyModal.appendChild(tr);
  });
};

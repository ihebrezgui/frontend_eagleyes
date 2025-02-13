import { INavData } from '@coreui/angular';



const userRole = localStorage.getItem('role');

export const navItems: INavData[] = [


  {
    name: '',
    title: true
  },


  {
    name: 'Accéder aux formules',
    url: '/forms',
    iconComponent: { name: 'cil-notes' },
    children: [
      {
        name: 'Ajouter une formule',
        url: '/forms/addFormule'
      },
      {
        name: 'Importer un fichier CSV',
        url: '/forms/uploadcsv'
      },

    ]
  },
  {
    name: 'Suivi des performances',
    url: '/charts',
    iconComponent: { name: 'cil-chart-pie' },
    children: [
      {
        name: 'Auditer la capacité',
        url: '/charts'
      },
      {
        name: 'Suivre la performance',
        url: '/charts/Donut'
      },

    ]
  },



];





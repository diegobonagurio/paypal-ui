import drive from './assets/drive.png';
import rine from './assets/C.png';
import smith from './assets/M.png';

const transactions = [
  {
    id: 1,
    title: 'Mike Rine',
    logo: rine,
    hour: '2 hours ago',
    price: 250,
    type: 'positive',
  },
  {
    id: 2,
    title: 'Google Drive',
    logo: drive,
    hour: 'Yesterday',
    price: 138.5,
    type: 'negative',
  },
  {
    id: 3,
    title: 'Casey Smith',
    logo: smith,
    hour: '1 week ago',
    price: 531,
    type: 'positive',
  },
];
export { transactions };

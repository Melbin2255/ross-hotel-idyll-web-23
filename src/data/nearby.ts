export interface Coordinates {
  top: string;
  left: string;
}

export interface Destination {
  id: string;
  name: string;
  coords: Coordinates;
  highlights?: string[];
  distance?: string;
  time?: string;
  icon: string;
}

export const nearby: Destination[] = [
  {
    id: 'nedumkandam',
    name: 'Nedumkandam (You Are Here)',
    coords: { top: '60%', left: '50%' }, // Slightly higher to allow more space below for Thekkady/Vagamon
    highlights: ['Central Location', 'Gateway to Idukki', 'Local Markets'],
    distance: '0 km',
    time: '0 min',
    icon: '/assets/nedumkandam.png' // Assuming this is your central node icon
  },
  {
    id: 'munnar',
    name: 'Munnar',
    coords: { top: '15%', left: '25%' }, // Consistent: Far North-West
    highlights: ['Tea Museums', 'Eravikulam National Park', 'Mattupetty Dam'],
    distance: '90 km',
    time: '2.5 hr',
    icon: '/svg/munnar.png'
  },
  {
    id: 'idukki-dam',
    name: 'Idukki Arch Dam',
    coords: { top: '38%', left: '18%' }, // Adjusted slightly inward from the absolute left, still distinctly west
    highlights: ['Dam View', 'Boating', 'Reservoir'],
    distance: '75 km',
    time: '2 hr',
    icon: '/svg/idukkidam.png'
  },
  {
    id: 'vagamon',
    name: 'Vagamon',
    coords: { top: '80%', left: '28%' }, // Pulled slightly right from the extreme left, more distinct from Idukki Dam path
    highlights: ['Pine Forest', 'Meadows', 'Paragliding'],
    distance: '70 km',
    time: '2 hr',
    icon: '/svg/vagamon.png'
  },
  {
    id: 'ramakkalmedu',
    name: 'Ramakkalmedu',
    coords: { top: '55%', left: '75%' }, // Pulled further right and slightly higher, visually separate from Thekkady
    highlights: ['Wind Farm', 'Scenic Views', 'Kuravan Kurathi Statue'],
    distance: '25 km',
    time: '45 min',
    icon: '/svg/ramakkalmedu.png'
  },
  {
    id: 'thekkady',
    name: 'Thekkady',
    coords: { top: '78%', left: '70%' }, // Moved slightly south-east, creating more space for its path
    highlights: ['Periyar Lake', 'Wildlife Safari', 'Spice Plantations'],
    distance: '60 km',
    time: '1.75 hr',
    icon: '/svg/tekady.png'
  },
];
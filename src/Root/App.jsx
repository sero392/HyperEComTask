import { AppBar } from '@mui/material';
import Button from '@mui/material/Button';
import HomeIndex from '../Views/Home';
import LayoutComp from '../Components/Layout/LayoutComp';

export default function App() {
  return (
    <LayoutComp Children={HomeIndex}>
    </LayoutComp>
  )
}


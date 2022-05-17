import  './style.scss';
import  IMAGE from '../img/glob.png';
import  {ClickCounter} from './ClickCounter';
export const App = () => {
    const name='Anna'
      return (
        <>
            <h1>hello typescript and webpack project---{process.env.NODE_ENV} {process.env.name}</h1>
            <img src={IMAGE} alt=""/>
            <ClickCounter/>
        </>
    )
}
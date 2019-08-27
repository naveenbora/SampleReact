
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Conent from "./Content.jsx";
const details=[
    {
    short: "NB",
    firstname:"Naveen",
    lastname:"Bora",
    index:0
    },
    {
        short: "NR",
        firstname:"Naveen",
        lastname:"Reddy",
        index:1
    },
    {
        short: "BN",
        firstname:"Bora",
        lastname:"Naveen",
        index:2
    }
]
class App extends React.Component
{
    render()
    {
        return <div className="main">
            <Header />
            <Conent user={details}/>
            <Footer />
            </div>;
            
    }
   
}
ReactDOM.render(<App />,document.getElementById('root'));


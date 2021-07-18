import intro_svg from '../../Assets/illustration.svg'
import './homepage.css'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom'
import Profile from './profile.png'


const useStyles = makeStyles(() => ({
    btnSet:{
        marginLeft:'6rem'
    },
    buttons:{
        border: '2px solid',
        borderRadius: '30px',
        marginLeft:'2rem'
    }
  }));


export default function Homepage() {

    const classes = useStyles();

    return (
    <div>
        <div>
            <section >
                <div className="circle-clip" ></div>
                <div className="rings1">
                    <div className="inner-ring1"></div>
                </div>
                <div className="rings2">
                    <div className="inner-ring2"></div>
                </div>
                <div className="rings3">
                    <div className="inner-ring3"></div>
                </div>
            </section>
           <div className="container-fluid" >
               <div className="row">
                   <div className="col">
                       <div className="row">
                         <p style={{marginTop:"20vh", marginLeft:"2vw", fontSize:"4rem"}}><span style={{color:"blue"}}>R</span>esearch <span style={{color:"blue"}}>P</span>ortal</p>
                       </div>
                       <div className="row justify-content-center" className={classes.btnSet}>
                            <Button component={Link} to={'/projects'}  variant="outlined" className="col-2" className={classes.buttons} color="primary" >Projects</Button>
                            <Button component={Link} to={'/login'} variant="outlined" className="col-2" className={classes.buttons} color="primary">Login</Button>
                        </div>
                   </div>
                    <div className="col ">
                        <img src={intro_svg} alt="" className="w-75 mr-4 d-flex " style={{marginTop:"10vh"}} />
                    </div>
               </div>
               <div className="row">
                   <div className="col-12">
                        
                   </div>
               </div>
           </div>
           <div className="container">
               
           </div>
        </div>

        <div >
            <h1 className="display-3 text-center">Our Objectives</h1>
            <section className="fcards">
                <div className="row" style={{paddingLeft:"50px", paddingRight:"50px", paddingTop:"100px"}}>
                <div className="col s12 m12 l4" style={{padding:"50px 50px", minWidth:"400px"}}>
                <div class="row">
                    <div className="col s12 m6">
                    <div className="card">
                        <div className="card-image">
                        <img src={Profile} class="card-img-top" style={{ paddingTop:"30px", paddingBottom:"10px"}}/>
                        </div>
                        <div className="card-content" style={{padding:"10px"}}>
                        <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col s12 m12 l4" style={{padding:"50px 50px", minWidth:"400px"}}>
                <div class="row">
                    <div className="col s12 m6">
                    <div className="card">
                        <div className="card-image">
                        <img src={Profile} class="card-img-top" style={{ paddingTop:"30px", paddingBottom:"10px"}}/>
                        </div>
                        <div className="card-content" style={{padding:"10px"}}>
                        <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col s12 m12 l4" style={{padding:"50px 50px", minWidth:"400px"}}>
                <div class="row">
                    <div className="col s12 m6">
                    <div className="card">
                        <div className="card-image">
                        <img src={Profile} class="card-img-top" style={{ paddingTop:"30px", paddingBottom:"10px"}}/>
                        </div>
                        <div className="card-content" style={{padding:"10px"}}>
                        <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col s12 m12 l4" style={{padding:"50px 50px", minWidth:"400px"}}>
                <div class="row">
                    <div className="col s12 m6">
                    <div className="card">
                        <div className="card-image">
                        <img src={Profile} class="card-img-top" style={{ paddingTop:"30px", paddingBottom:"10px"}}/>
                        </div>
                        <div className="card-content" style={{padding:"10px"}}>
                        <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                </div>                
            </section>
        </div>



    <div className="">
        <div className="row text-center" style={{padding:"50px"}}>
            <div className="col">
                <img src={Profile} style={{height:"400px", width:"400px", padding:"10px"}}/>
            </div>
            <div className="col" style={{minWidth:"400px"}}>
                <h1 className="display-4">Director's Message</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi impedit qui consequuntur incidunt distinctio quae, voluptate quisquam ipsa ducimus, magni amet reiciendis expedita neque vel nobis laboriosam! Similique quis cumque ipsa veniam, quo doloremque natus, exercitationem laborum, expedita possimus id repellat repudiandae amet rem perferendis quam illo esse quas! Accusantium dignissimos placeat, ex odit, non nesciunt unde illum eveniet quod ratione, alias at! Aperiam tempora doloribus unde error maiores consequatur distinctio quibusdam architecto, placeat magni. Dolorem totam facere praesentium aspernatur vel at vero recusandae vitae odit, nesciunt ducimus blanditiis sed enim iste provident architecto itaque magni minus perspiciatis voluptate laborum. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus fugit minus natus, doloremque sed possimus hic corrupti, at, expedita dicta impedit. Laudantium ipsum perspiciatis magni, obcaecati temporibus illum commodi ea, quas consectetur ad veritatis aliquid asperiores eius.</p>
            </div>
        </div>
    </div>


    </div>
    )
}
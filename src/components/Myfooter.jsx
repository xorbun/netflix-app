import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { Facebook, Instagram, Twitter,Youtube } from "react-bootstrap-icons"


const Footer = () => <footer className="page-footer font-small white pt-4 ">
    <div className="container-fluid text-center text-md-left bg-dark">
        <Row>
            
            <Col lg={2}>
                <h5 className="text-uppercase text-white"><Facebook/> <Instagram/> <Twitter/> <Youtube/> </h5>
                <p className="text-white">Audio and Subtitles</p>
                <p className="text-white">Media center</p>
                <p className="text-white">Privacy</p>
                <p className="text-white">Contact us</p>
            </Col>
            <Col lg={2}>
                <h5>&nbsp</h5>
                <p>&nbsp</p>
                <p className="text-white">Audio Description</p>
                <p className="text-white">Investor Relations</p>
                <p className="text-white">Legal Notices</p>
            </Col>
            <Col lg={2}>
                <h5>&nbsp</h5>
                <p>&nbsp</p>
                <p className="text-white">Help Center</p>
                <p className="text-white">Jobs</p>
                <p className="text-white">Coockie Preferences</p>
                
            </Col>
            <Col lg={2}>
                <h5>&nbsp</h5>
                <p>&nbsp</p>
                <p className="text-white">Gift Cards</p>
                <p className="text-white">Terms of use</p>
                <p className="text-white">Corporate Information</p>
                
            </Col>
        </Row>
        <div className="footer-copyright text-start py-3">
            <Button variant="outline-secondary">Service code</Button>
            <p className="text-white"> © 1997-2020 Netflix, Inc.</p>
        </div>
    </div>

   

</footer>

export default Footer
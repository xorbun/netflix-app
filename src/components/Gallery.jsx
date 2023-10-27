import { Component } from "react";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
class Tvseries extends Component
{
    state=
    {
        info:[]
    }

componentDidMount()
{
    this.getcomments(this.props)
}
  getcomments= ()=>
  {
    fetch("http://www.omdbapi.com/?i=tt3896198&apikey=92d18bdf"+ this.props.search)

    .then((res)=>
    {
      if(res.ok)
      {
          console.log("ok")
          return res.json()
      }
      else
      {
        throw new Error("errore")
      }
    })
    .catch((err)=>
    {
        console.log(err)
    })
    .then((data)=>
    {
        
        this.setState({info:data.Search})
        console.log("data", data.Search)
        console.log(this.state)
    })
  }
 
    render()
    {
       
        return(
            <div className="bg-dark">
                <h1 className="text-white-50 d-flex mx-3">{this.props.example}</h1>
                <div>
                    <Container className="d-flex justify-content-center">
                        <Row>
                        {this.state.info.map((films)=>
                        {
                            return(
                                <Card style={{ width: '7rem' }}>
                                <Card.Img key={films.imdbID} variant="top" src={films.Poster} />
                                </Card>
                            )
                        })}
                        </Row>
                   </Container>
                </div>
            </div>
        )
    }
}
export default Tvseries
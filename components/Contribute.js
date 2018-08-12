import React,{Component} from 'react';
import {Form, Button,Input,Message} from 'semantic-ui-react';
import Layout from './Layout';
import NGO from '../ethereum/NGO';
import web3 from '../ethereum/web3';
class Contribute extends Component {
    state = {
        donation:0,
        errorMsg:'',
        loading:false
    }
    handleSubmit = async (event) => {
        event.preventDefault();
        this.setState({loading:true,errorMsg:''});
        const currentNGO = NGO(this.props.address); 
        const accounts =  await web3.eth.getAccounts();
        try{
            await currentNGO.methods.contribute()
            .send({
                from:accounts[1],
                value:web3.utils.toWei(this.state.donation,'ether'),
                gas:'2000000'
            });
            // Router.pushRoute('/');
        }
        catch(Error){
            this.setState({errorMsg:Error.message});
        }
       this.setState({loading:false});

    }
    render(){
        return(
            <Layout>
            <h3>Happy Donating</h3>
            <Form onSubmit={this.handleSubmit} error={!!this.state.errorMsg}>
                <Form.Field>
                <label>Amount to Donate</label>
                <Input label="ether" value ={this.state.donation} 
                onChange={event=>this.setState({donation:event.target.value})}/>
                </Form.Field>
                <Message error header="Something went wrong" content={this.state.errorMsg}/>
                <Button primary loading={this.state.loading}>Donate</Button>
                
            </Form>
            </Layout>
        )
       
    }
}

export default Contribute;
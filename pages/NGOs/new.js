import React,{Component} from 'react';
import Layout from '../../components/Layout';
import {Form, Button,Input,Message} from 'semantic-ui-react';
import meraNGO from '../../ethereum/meraNGO';
import web3  from '../../ethereum/web3';
import {Link,Router} from '../../routes';

class NGO extends Component{
    state={
        minimumContribution:0,
        errorMsg:'',
        loading:false
    }
    handleSubmit = async (event) => {
        event.preventDefault();
        this.setState({loading:true,errorMsg:''});
        const accounts =  await web3.eth.getAccounts();
        try{
            await meraNGO.methods.onboardNGO(this.state.minimumContribution)
            .send({
                from:accounts[1],
                gas:'2000000'
            });
            Router.pushRoute('/');
        }
        catch(Error){
            this.setState({errorMsg:Error.message});
        }
       this.setState({loading:false});

    }
    render(){
        return(
            <Layout>
            <h3>A step into decentralization</h3>
            <Form onSubmit={this.handleSubmit} error={!!this.state.errorMsg}>
                <Form.Field>
                <label>Minimum Contribution</label>
                <Input label="wei" value ={this.state.minimumContribution} 
                onChange={event=>this.setState({minimumContribution:event.target.value})}/>
                </Form.Field>
                <Message error header="Something went wrong" content={this.state.errorMsg}/>
                <Button primary loading={this.state.loading}>On Board</Button>
                
            </Form>
            </Layout>
        )
        
    }
}

export default NGO;
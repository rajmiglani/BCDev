import React,{Component} from 'react';
import {Form, Button,Input,Message} from 'semantic-ui-react';
import Layout from '../../../components/Layout';
import NGO from '../../../ethereum/NGO';
import web3 from '../../../ethereum/web3';
import {Link,Router} from '../../../routes';
class CreateRequest extends Component {
    static async getInitialProps(props){
        const {address} = props.query;
        return {address};
    }
    state = {
        desc:0,
        amt:0,
        recipient:'',
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
                <label>Description</label>
                <Input label="purpose" value ={this.state.desc} 
                onChange={event=>this.setState({desc:event.target.value})}/>
                </Form.Field>
                <Form.Field>
                <label>Amount</label>
                <Input label="amount of donation" value ={this.state.amt} 
                onChange={event=>this.setState({amt:event.target.value})}/>
                </Form.Field>
                <Form.Field>
                <label>Recepient</label>
                <Input label="address" value ={this.state.recipient} 
                onChange={event=>this.setState({recipient:event.target.value})}/>
                </Form.Field>
                <Message error header="Something went wrong" content={this.state.errorMsg}/>
                <Button primary loading={this.state.loading}>Create</Button>
                
            </Form>
            </Layout>
        )
       
    }
}

export default newRequest;
import React, {Component} from 'react'
import {Form, Button} from 'semantic-ui-react'
import Layout from '../../components/Layout'
import factory from '../../factory'
import web3 from '../../web3'

class CampaignNew extends Component{
    state = {
        minimumContribution: ''
    };

    onSubmit = async (event) => {
        event.preventDefault();

        const accounts = await web3.eth.getAccounts();
        await web3.eth.getAccounts(console.log);
        await factory.methods.createCampaign(this.state.minimumContribution).send({
                from: accounts[0]
                // Doesn't need to specifie gas because Metamask takes care of that
            });
    };

    render(){
        return (
            <Layout>
            <h3>New Campaign!</h3>
            <Form onSubmit={this.onSubmit}>
                <Form.Field>
                    <label>Minimum Contribution</label>
                    <input 
                        label="wei"
                        labelPosition="right"
                        value={this.state.minimumContribution}
                        onChange={event =>
                            this.setState({minimumContribution: event.target.value})}
                    />
                </Form.Field>

                <Button primary>Create!</Button>
            </Form>
            </Layout>
        );
    }
}

export default CampaignNew;
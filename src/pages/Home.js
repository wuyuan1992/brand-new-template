import React from 'react';
import { Fade, Modal, Toast, Picker } from '../components';
import { List } from 'immutable';
import PropTypes from 'prop-types';

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            showModal : false,
            showToast : false,
            showPicker : false,

            list: List([
                {
                    name: 'elon',
                    age: 26
                },
                {
                    name: 'elon',
                    age: 26
                },
                {
                    name: 'elon',
                    age: 26
                }
            ])
        };

        this.updateList = this.updateList.bind(this);
    }
    updateList(){
        const list = this.state.list.map(({name, age}) => ({ name, age: age+1 }));
        this.setState({list});
    }

    render(){
        const { list } = this.state;
        console.log(list);
        console.log(this.props);

        return (
            <Fade {...this.props} >
                <h1>Home</h1>

                <ul onClick={ this.updateList }>
                    {
                        this.state.list.map((el, index) => (
                            <li key={`li-${index}`}>{el.name}: {el.age}</li>
                        ))
                    }
                </ul>
                <button
                    onClick={()=>{ this.setState({ showModal: true }) }}
                > show Modal </button>
                <button
                    onClick={()=>{ this.setState({ showToast: true }) }}
                > show Toast </button>
                {/* {
                    this.state.showModal && (
                        <Modal
                            onDismiss={()=>{ this.setState({ showModal: false }) }}
                        >
            
                            <div
                                // onClick={()=>{ this.setState({ showModal: false }) }}
                            >
                                <p
                                    style={{
                                        width:'80%', border:'1px solid #EDEDED',
                                        margin: '0 auto',
                                        background:'#FFF'
                                    }}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Laboriosam officiis numquam sed minus repudiandae vero culpa pariatur
                                    ea repellat cumque! Atque, in delectus. Illum ipsa maxime minima minus,
                                    mollitia modi?
                                </p>
                            </div>
                        </Modal>
                    )
                } */}
                
                <Toast
                    show = { this.state.showToast }
                    onDismiss={()=>{ this.setState({ showToast: false }) }}
                >
                    toast
                </Toast>
            </Fade>
        )
    }
}

Home.propTypes = {
    showModal: PropTypes.bool,
    showToast: PropTypes.bool,
    showPicker: PropTypes.bool,
    list: PropTypes.object
}

export default Home;
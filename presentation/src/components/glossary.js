import React from 'react';
import Word from './word';
import MyJumbotron from './myJumbotron';
import Footer from './footer';

class Glossary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            words: [{}],
            data: [{}],
            popularity: false,
            archived: false
        }
    }

    searchResult = (input) => {
        const match = [];
        if (input === '') {this.refresh(); return;}
        for (let i = 0; i < this.state.data.length; i++) {
            if (this.state.data[i].term.toLowerCase() === input.toLowerCase() || 
            this.state.data[i].meta.findIndex(ele => ele.toLowerCase() === input.toLowerCase()) !== -1) {
                match.push(this.state.data[i])
            }
        }
        match.length === 0 ? window.alert('Sorry, no results were found')
        : this.setState({words: match});
    }

    handleTogglePop = () => {
        this.setState({popularity: !this.state.popularity});
        this.refresh();
    }

    handleToggleArch1 = () => {
        this.setState({archived: true});
        this.refresh();
    }
    handleToggleArch2 = () => {
        this.setState({archived: false});
        this.refresh();
    }

    componentDidMount() {
        this.refresh();
    }

    removeTerm = async (id) => {
        const options = {
            method: 'DELETE',
        }
        await fetch(`${process.env.REACT_APP_API_URL}/glossary/${id}`, options);
        this.refresh();
    }

    quickSort = (arr) => {
        if (arr.length === 1) {return arr};
        const pivot = arr[arr.length - 1].visits;
        const leftArr = [];
        const rightArr = [];
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i].visits >= pivot) {
                leftArr.push(arr[i]);
            } else {
                rightArr.push(arr[i]);
            }
        }

        if (leftArr.length > 0 && rightArr.length > 0) {
            return [...this.quickSort(leftArr), arr[arr.length - 1], ...this.quickSort(rightArr)];
        } else if (leftArr.length > 0) {
            return [...this.quickSort(leftArr), arr[arr.length - 1]];
        } else {
            return [arr[arr.length - 1], ...this.quickSort(rightArr)];
        }
    }

    refresh = async () => {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/glossary`);
        let data = await response.json();
        data.sort((a,b) => {
            var termA = a.term.toUpperCase();
            var termB = b.term.toUpperCase();
            if (termA < termB) {return -1};
            if (termB > termA) {return 1};
            return 0;
        });
        const doNothing = () => {return;}
        // IMPLEMENT THE QUICK SORT ALGORITHM ACCORDING TO NUMBER OF VISITS. THIS MUST BE DONE AFTER AN UPDATE METHOD IS CREATED FOR THE BACK-END
        if (this.state.popularity === true) {
            // this.setState({words: this.quickSort(data)})
            data = this.quickSort(data);
        }
        if (this.state.archived === true) {
            const archivedWords = [];
            for (let i = 0; i < data.length; i++) {
                data[i].archived ? archivedWords.push(data[i]): doNothing();
            }
            data = archivedWords;
        } else {
            const unarchivedWords = [];
            for (let i = 0; i < data.length; i++) {
                data[i].archived ? doNothing() : unarchivedWords.push(data[i]);
            }
            data = unarchivedWords;
        }
        this.setState({words: data, data: data});
    }

    render() {
        const words = this.state.words.map(word => <Word 
            key={word._id} 
            word={word} 
            remove={this.removeTerm} 
            refresh={this.refresh}
        />);
        return (
            <>
            <MyJumbotron 
                togglePop={this.handleTogglePop} 
                toggleArch1={this.handleToggleArch1} 
                toggleArch2={this.handleToggleArch2} 
                refresh={this.refresh} 
                searchResult={this.searchResult}
                className="no-margin"
            />
            <div className='container-fluid padding'>
                <div className="words">
                    {words}
                </div>
            </div>
            <Footer />
            </>
        )
    }
}

export default Glossary;
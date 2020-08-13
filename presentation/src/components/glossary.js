import React from 'react';
import Word from './word';
import MyJumbotron from './myJumbotron';
import Footer from './footer';

class Glossary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            words: [{}],
            popularity: false
        }
    }

    handleToggle = () => {
        const current = this.state.popularity;
        this.refresh(!current);
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

    refresh = async (popularity = false) => {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/glossary`);
        const data = await response.json();
        data.sort((a,b) => {
            var termA = a.term.toUpperCase();
            var termB = b.term.toUpperCase();
            if (termA < termB) {return -1};
            if (termB > termA) {return 1};
            return 0;
        });
        // IMPLEMENT THE QUICK SORT ALGORITHM ACCORDING TO NUMBER OF VISITS. THIS MUST BE DONE AFTER AN UPDATE METHOD IS CREATED FOR THE BACK-END
        popularity ? this.setState({words: this.quickSort(data), popularity: popularity}) : this.setState({words: data, popularity: popularity});
        console.log(this.quickSort(data))
    }

    render() {
        const words = this.state.words.map(word => <Word key={word._id} word={word} remove={this.removeTerm} refresh={this.refresh} />);
        return (
            <>
            <MyJumbotron toggle={this.handleToggle} refresh={this.refresh} />
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
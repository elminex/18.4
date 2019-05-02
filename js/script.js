const movies = [
    {
        id: 1,
        title: 'Harry Potter',
        desc: 'Film o czarodzieju',
        poster: 'https://m.media-amazon.com/images/M/MV5BNjQ3NWNlNmQtMTE5ZS00MDdmLTlkZjUtZTBlM2UxMGFiMTU3XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_.jpg'
    },
    {
        id: 2,
        title: 'Król Lew',
        desc: 'Film o królu zwierząt, świni i jakiejś łasicy czy coś.',
        poster: 'https://m.media-amazon.com/images/M/MV5BYTYxNGMyZTYtMjE3MS00MzNjLWFjNmYtMDk3N2FmM2JiM2M1XkEyXkFqcGdeQXVyNjY5NDU4NzI@._V1_SY1000_CR0,0,673,1000_AL_.jpg'
    },
    {
        id: 3,
        title: 'Skazani na Shawshank',
        desc: 'Film o życiu w więzieniu',
        poster: 'https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg'
    },
    {
        id: 4,
        title: 'Forrest Gump',
        desc: 'Nie trzeba mieć wysokiego IQ, żeby mieć ciekawe życie',
        poster: 'https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg'
    }
]

let MoviesList = React.createClass({
    render: function () {
        return (
            React.createElement('div', {},
                React.createElement('h1', {}, 'Lista filmów'),
                React.createElement('ul', {}, moviesElements)
            )
        )
    }
});

let MovieTitle = React.createClass({
    propTypes: {
        title: React.PropTypes.string.isRequired
    },
    render: function () {
        return (
            React.createElement('h2', {}, this.props.title)
        )
    }
});

let MovieDesc = React.createClass({
    propTypes: {
        desc: React.PropTypes.string.isRequired
    },
    render: function () {
        return (
            React.createElement('p', {}, this.props.desc)
        )
    }
});

let MoviePoster = React.createClass({
    propTypes: {
        src: React.PropTypes.string.isRequired
    },
    render: function () {
        return (
            React.createElement('img', { src: this.props.src, className: 'image' })
        )
    }
});

let Movie = React.createClass({
    propTypes: {
        title: React.PropTypes.string.isRequired,
        desc: React.PropTypes.string.isRequired,
        poster: React.PropTypes.string.isRequired
    },
    render: function () {
        return (
            React.createElement('li', {},
                React.createElement(MovieTitle, { title: this.props.title }),
                React.createElement(MovieDesc, { desc: this.props.desc }),
                React.createElement(MoviePoster, { src: this.props.poster, className: 'image' })
            )
        )
    }
});

let moviesElements = movies.map(function (movie) {
    return React.createElement(Movie, {
        key: movie.id,
        title: movie.title,
        desc: movie.desc,
        poster: movie.poster
    });
});

let element = React.createElement(MoviesList, {});
ReactDOM.render(element, document.getElementById('app'));

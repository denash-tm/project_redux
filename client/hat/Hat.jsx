import React from 'react';
import { connect } from 'react-redux';


const mapStateToProps = (state) => (state);

// const mapDispatchToProps = dispatch => ({
//
// });

class Hat extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {

        return (
            <div>
                <ul>
                    <li><a href="/list/begin">Начало дня</a></li>
                    <li><a href="/list/sale">Продажи</a></li>
                    <li><a href="#">Расход</a></li>
                    <li><a href="#">Приход</a></li>
                    <li><a href="#">Конец дня</a></li>
                    <li><a href="#">Отчет</a></li>
                </ul>

            </div>
        );
    }
}
export default connect(mapStateToProps)(Hat);


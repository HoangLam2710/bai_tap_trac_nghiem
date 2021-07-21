import { Typography, Container, withStyles, Button } from "@material-ui/core";
import React, { Component } from "react";
import { connect } from "react-redux";
import FillInBlank from "../../Components/FillInBlank";
import MultipleChoice from "../../Components/MultipleChoice";
import axios from "axios";
import styles from "./style";

class Home extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        let total = 0;
        this.props.answerList.forEach((item) => {
            if (item.answer.exact) {
                total++;
            }
        });

        alert(`Bạn được ${total} điểm`);
    };

    render() {
        const { classes } = this.props;
        return (
            <div>
                <Typography
                    component="h1"
                    variant="h3"
                    gutterBottom
                    className={classes.title}
                >
                    Online Test
                </Typography>

                <Container maxWidth="md">
                    <form onSubmit={this.handleSubmit}>
                        {this.props.questionList.map((item) => {
                            if (item.questionType === 1) {
                                return (
                                    <MultipleChoice
                                        key={item.id}
                                        question={item}
                                    />
                                );
                            }
                            return (
                                <FillInBlank key={item.id} question={item} />
                            );
                        })}
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                        >
                            GỬI KẾT QUẢ
                        </Button>
                    </form>
                </Container>
            </div>
        );
    }

    componentDidMount() {
        axios({
            url: "https://5bd2959ac8f9e400130cb7e9.mockapi.io/api/questions",
            method: "GET",
        })
            .then((res) => {
                this.props.dispatch({
                    type: "SET_QUESTIONS",
                    payload: res.data,
                });
            })
            .catch((err) => {
                console.log(err);
            });
    }
}

const mapStateToProps = (state) => {
    return {
        questionList: state.question.questionList,
        answerList: state.question.answerList,
    };
};

export default connect(mapStateToProps)(withStyles(styles)(Home));

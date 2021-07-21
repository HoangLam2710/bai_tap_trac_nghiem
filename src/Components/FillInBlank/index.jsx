import { Typography, TextField, withStyles } from "@material-ui/core";
import { connect } from "react-redux";
import React, { Component } from "react";
import styles from "./style";

class FillInBlank extends Component {
    handleChange = (e) => {
        const { id, answers } = this.props.question;
        const answerUser = {
            questionId: id,
            answer: {
                content: e.target.value,
                exact: false,
            },
        };

        if (answers[0].content === e.target.value.trim()) {
            answerUser.answer.exact = true;
        }

        this.props.dispatch({
            type: "SET_ANSWERLIST",
            payload: answerUser,
        });
    };

    render() {
        const { classes } = this.props;
        const { id, content } = this.props.question;
        return (
            <div className={classes.marginBottomAnswer}>
                <Typography>
                    Câu {id}: {content}
                </Typography>
                <TextField
                    style={{ margin: 8 }}
                    placeholder="Đáp án của bạn"
                    fullWidth
                    margin="normal"
                    onBlur={this.handleChange}
                />
            </div>
        );
    }
}

export default connect()(withStyles(styles)(FillInBlank));

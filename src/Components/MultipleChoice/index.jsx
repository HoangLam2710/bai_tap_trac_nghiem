import React, { Component } from "react";
import { connect } from "react-redux";
import {
    withStyles,
    FormControl,
    FormLabel,
    RadioGroup,
    Radio,
    FormControlLabel,
} from "@material-ui/core";
import styles from "./style";

class MultipleChoice extends Component {
    handleRadioChange = (e) => {
        const { id, answers } = this.props.question;

        const index = answers.findIndex(
            (item) => item.content === e.target.value
        );

        const answerUser = {
            questionId: id,
            answer: {
                content: answers[index].content,
                exact: answers[index].exact,
            },
        };

        this.props.dispatch({
            type: "SET_ANSWERLIST",
            payload: answerUser,
        });
    };

    render() {
        const { classes } = this.props;
        const { id, content, answers } = this.props.question;
        return (
            <div>
                <FormControl
                    component="fieldset"
                    className={classes.marginBottomAnswer}
                >
                    <FormLabel component="h6" className={classes.marginBlock}>
                        Câu {id}: {content}
                    </FormLabel>
                    <RadioGroup
                        aria-label="quiz"
                        name="quiz"
                        onChange={this.handleRadioChange}
                    >
                        {answers.map((item) => {
                            return (
                                <FormControlLabel
                                    key={item.id}
                                    value={item.content}
                                    control={<Radio />}
                                    label={item.content}
                                />
                            );
                        })}
                    </RadioGroup>
                </FormControl>
            </div>
        );
    }
}

export default connect()(withStyles(styles)(MultipleChoice));

import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { SIDE_BAR_ITEM_STYLE } from '../ConstantStyles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DeleteIcon from '@material-ui/icons/Delete';
import { removeHTMLTags } from '../helpers';

class SideBarItem extends Component {

    selectNote = (n, i) => this.props.selectNote(n, i);
    deleteNote = (note) => {
        if(window.confirm(`Are you sure you want to delete: ${note.title}`)) {
            this.props.deleteNote(note);
        }
    }

    render() {
        const { _note, _index, classes, selectedNoteIndex } = this.props;
        return (
            <div key={_index}>
                <ListItem
                    className={classes.listItem}
                    selected={selectedNoteIndex === _index}
                    alignItems='flex-start'>
                    <div
                        className={classes.textSection}
                        onClick={() => this.selectNote(_note, _index)}
                    >
                        <ListItemText
                            primary={_note.title}
                            secondary={removeHTMLTags(_note.body.substring(0, 30) + '...')}
                        />
                    </div>
                    <DeleteIcon 
                        className={classes.deleteIcon}
                        onClick={() => this.deleteNote(_note)}
                    />
                </ListItem>
            </div>
        )
    }
}

export default withStyles(SIDE_BAR_ITEM_STYLE)(SideBarItem);
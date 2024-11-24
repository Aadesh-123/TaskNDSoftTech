import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button,
} from "@mui/material";

const AddQuestionDialog = ({
  open,
  onClose,
  newQuestion,
  setNewQuestion,
  handleAddNewQuestion,
}) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add New Question/Answer</DialogTitle>
      <DialogContent>
        <TextField
          label="Title"
          fullWidth
          margin="dense"
          value={newQuestion.title}
          onChange={(e) =>
            setNewQuestion((prev) => ({ ...prev, title: e.target.value }))
          }
        />
        <TextField
          label="Body"
          fullWidth
          margin="dense"
          multiline
          rows={4}
          value={newQuestion.body}
          onChange={(e) =>
            setNewQuestion((prev) => ({ ...prev, body: e.target.value }))
          }
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">
          Cancel
        </Button>
        <Button onClick={handleAddNewQuestion} color="primary">
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddQuestionDialog;

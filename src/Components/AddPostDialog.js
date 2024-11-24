import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button,
  FormControlLabel,
  Checkbox,
} from "@mui/material";

const AddPostDialog = ({
  open,
  onClose,
  newPost,
  setNewPost,
  handleAddNewPost,
}) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add New Post/Question</DialogTitle>
      <DialogContent>
        <TextField
          label="Title"
          fullWidth
          margin="dense"
          value={newPost.title}
          onChange={(e) =>
            setNewPost((prev) => ({ ...prev, title: e.target.value }))
          }
        />
        <TextField
          label="Body"
          fullWidth
          margin="dense"
          multiline
          rows={4}
          value={newPost.body}
          onChange={(e) =>
            setNewPost((prev) => ({ ...prev, body: e.target.value }))
          }
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={newPost.isQuestion}
              onChange={(e) =>
                setNewPost((prev) => ({
                  ...prev,
                  isQuestion: e.target.checked,
                }))
              }
            />
          }
          label="Is this a question?"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">
          Cancel
        </Button>
        <Button onClick={handleAddNewPost} color="primary">
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddPostDialog;

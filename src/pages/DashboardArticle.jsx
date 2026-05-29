import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";

import {
  Box,
  Typography,
  Button,
  Stack,
  Chip,
  TextField,
  MenuItem,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";

import { DataGrid } from "@mui/x-data-grid";

import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const DashboardArticle = () => {
  const [rows, setRows] = useState([]);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const [open, setOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const [form, setForm] = useState({
    slug: "",
    title: "",
    content: "",
    paragraphs: "",
    preview: "",
    status: "Active",
  });

  const fetchArticles = async () => {
    try {
      const res = await axios.get("http://localhost:8000/api/articles");
      setRows(res.data.articles || res.data || []);
    } catch (err) {
      console.log("GET ERROR:", err);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  const filteredRows = useMemo(() => {
    return rows.filter((r) => {
      const matchSearch =
        r.title?.toLowerCase().includes(search.toLowerCase()) ||
        r.slug?.toLowerCase().includes(search.toLowerCase());

      const matchStatus =
        statusFilter === "All" ? true : r.status === statusFilter;

      return matchSearch && matchStatus;
    });
  }, [rows, search, statusFilter]);

  const handleOpenAdd = () => {
    setEditMode(false);
    setForm({
      slug: "",
      title: "",
      content: "",
      paragraphs: "",
      preview: "",
      status: "Active",
    });
    setOpen(true);
  };

  const handleOpenEdit = (row) => {
    setEditMode(true);
    setSelectedId(row._id || row.id);
    setForm(row);
    setOpen(true);
  };

  const handleSave = async () => {
    try {
      if (
        !form.slug ||
        !form.title ||
        !form.paragraphs
      ) {
        return alert('Please fill required fields');
      }

      if (editMode) {
        await axios.put(
          `http://localhost:8000/api/articles/${selectedId}`,
          form
        );
      } else {
        await axios.post(
          "http://localhost:8000/api/articles",
          form
        );
      }
      fetchArticles();
      setOpen(false);
    } catch (err) {
      alert(err.response?.data?.message || "Save failed");
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/api/articles/${id}`);
      fetchArticles();
    } catch (err) {
      alert("Delete failed");
    }
  };

  const toggleStatus = async (id) => {
    try {
      const row = rows.find((r) => (r._id || r.id) === id);
      if (row) {
        await axios.put(
          `http://localhost:8000/api/articles/${id}`,
          {
            ...row,
            status: row.status === "Active" ? "Disabled" : "Active",
          }
        );
        fetchArticles();
      }
    } catch (err) {
      alert("Status toggle failed");
    }
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 200 },
    { field: "slug", headerName: "Slug", width: 180 },
    { field: "title", headerName: "Title", width: 220 },
    { field: "paragraphs", headerName: "Paragraphs", width: 130 },
    { field: "preview", headerName: "Preview", width: 300 },

    {
      field: "status",
      headerName: "Status",
      width: 140,
      renderCell: (params) => (
        <Chip
          label={params.value}
          color={params.value === "Active" ? "success" : "error"}
          size="small"
        />
      ),
    },

    {
      field: "actions",
      headerName: "Actions",
      width: 260,
      renderCell: (params) => (
        <Stack direction="row" spacing={1}>
          <IconButton
            color="primary"
            onClick={() => handleOpenEdit(params.row)}
          >
            <EditIcon />
          </IconButton>

          <IconButton
            color="warning"
            onClick={() => toggleStatus(params.row._id)}
          >
            Toggle
          </IconButton>

          <IconButton
            color="error"
            onClick={() => handleDelete(params.row._id)}
          >
            <DeleteIcon />
          </IconButton>
        </Stack>
      ),
    },
  ];

  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" mb={2}>
        <Typography variant="h4">Articles</Typography>

        <Button variant="contained" onClick={handleOpenAdd}>
          Add Article
        </Button>
      </Stack>

      <Stack direction="row" spacing={2} mb={3}>
        <TextField
          fullWidth
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <TextField
          select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          sx={{ width: 200 }}
        >
          <MenuItem value="All">All</MenuItem>
          <MenuItem value="Active">Active</MenuItem>
          <MenuItem value="Disabled">Disabled</MenuItem>
        </TextField>
      </Stack>

      <Box sx={{ height: 500, width: "100%" }}>
        <DataGrid rows={filteredRows} columns={columns} getRowId={(row) => row._id} />
      </Box>

      <Dialog open={open} onClose={() => setOpen(false)} fullWidth>
        <DialogTitle>
          {editMode ? "Edit Article" : "Add Article"}
        </DialogTitle>

        <DialogContent>
          <Stack spacing={2} mt={1}>
            <TextField
              label="Slug"
              value={form.slug}
              onChange={(e) =>
                setForm({ ...form, slug: e.target.value })
              }
            />
            <TextField
              label="Title"
              value={form.title}
              onChange={(e) =>
                setForm({ ...form, title: e.target.value })
              }
            />
            <TextField
              label="Paragraphs"
              value={form.paragraphs}
              onChange={(e) =>
                setForm({ ...form, paragraphs: e.target.value })
              }
            />
            <TextField
              label="Preview"
              value={form.preview}
              onChange={(e) =>
                setForm({ ...form, preview: e.target.value })
              }
            />
          </Stack>
        </DialogContent>

        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button variant="contained" onClick={handleSave}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default DashboardArticle;
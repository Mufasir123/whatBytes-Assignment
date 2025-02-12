"use client";

import React, { useState } from "react";
import Chart from "./Chart";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { setDatas } from "@/store/dataSlice";

const Main = () => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    rank: "",
    percentile: "",
    currentScore: "",
  });
  const [data, setData] = useState([]);
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault();
    // Update the state with the new form data
    setFormData({
      rank: formData.rank,
      percentile: formData.percentile,
      currentScore: formData.currentScore,
    });
    setData(formData);
    dispatch(setDatas(formData));
    
    // Close the dialog after submission
    handleClose();
    setTimeout(() => {
      setFormData({
        rank: "",
        percentile: "",
        currentScore: "",
      });
    }, 0);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
      <div>
        <h3 className="text-xl font-bold ml-5 mt-5">Skill Test</h3>
        <div className="border-2 rounded-md p-2 flex flex-col md:flex-row items-center m-5 justify-around min-h-[8rem] h-auto gap-4 md:gap-0">
          <img className="w-10" src="/HTML5_logo.svg" alt="" />
          <div className="text-center md:text-left">
            <h1>Hyper Text Markup Language</h1>
            <div className="flex flex-col md:flex-row gap-2 md:gap-0">
              <p>Questions: 08 </p>
              <span className="hidden md:inline">|</span>
              <p>Duration: 15 mins </p>
              <span className="hidden md:inline">|</span>
              <p>Submitted on 5 June 2021</p>
            </div>
          </div>
          <button
            onClick={handleClickOpen}
            className="bg-blue-900 shadow-slate-950 p-1 w-20 h-10 text-sm font-medium text-white rounded-md"
          >
            Update
          </button>

          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">{"Update scores"}</DialogTitle>
            <form onSubmit={handleSubmit}>
              <DialogContent>
                <div className="flex justify-between items-center">
                  <p className="font-medium">
                    Update your <span className="font-bold">Rank</span>
                  </p>
                  <input
                    className="border-blue-400 border-2 rounded-md p-2 w-44"
                    type="number"
                    placeholder="Rank"
                    value={formData.rank}
                    onChange={(e) =>
                      setFormData({ ...formData, rank: e.target.value })
                    }
                  />
                </div>
                <div className="flex justify-between items-center mt-5">
                  <p className="font-medium">
                    Update your <span className="font-bold">Percentile</span>
                  </p>
                  <input
                    className="border-blue-400 border-2 rounded-md p-2 w-44"
                    type="number"
                    placeholder="Percentile"
                    value={formData.percentile}
                    onChange={(e) =>
                      setFormData({ ...formData, percentile: e.target.value })
                    }
                  />
                </div>
                <div className="flex justify-between items-center mt-5">
                  <p className="font-medium">
                    Update your{" "}
                    <span className="font-bold">Current Score (out of 15)</span>
                  </p>
                  <input
                    className="border-blue-400 border-2 rounded-md p-2 w-44"
                    type="number"
                    placeholder="Correct answers"
                    value={formData.currentScore}
                    onChange={(e) =>
                      setFormData({ ...formData, currentScore: e.target.value })
                    }
                  />
                </div>
              </DialogContent>
              <DialogActions>
                <Button className="" onClick={handleClose}>
                  Cancel
                </Button>
                <Button type="submit" className="" autoFocus>
                  Save
                </Button>
              </DialogActions>
            </form>
          </Dialog>
        </div>

        <div>
          <div className="border-2 rounded-md p-2 items-center m-5 justify-around min-h-[9rem] h-auto">
            <h1 className="font-bold">Quick Statistics</h1>
            <div className="flex flex-col md:flex-row gap-5 justify-around ml-6 mt-2">
              <div className="flex gap-4 items-center">
                <img
                  className="w-10 h-10 bg-slate-300 rounded-full p-2"
                  src="trophy.svg"
                  alt="rank"
                />
                <div>
                  <p className="font-bold">{data.rank}</p>
                  <p className="text-sm text-slate-500">YOUR RANK </p>
                </div>
              </div>

              <div className="hidden md:block border-r-2"></div>

              <div className="flex gap-4 items-center">
                <img
                  className="w-10 h-10 bg-slate-300 rounded-full p-2"
                  src="Clipboards.svg"
                  alt="percent"
                />
                <div>
                  <p className="font-bold">{data.percentile}%</p>
                  <p className="text-sm text-slate-500">PERCENTILE</p>
                </div>
              </div>

              <div className="hidden md:block border-r-2"></div>

              <div className="flex gap-4 items-center">
                <img
                  className="w-10 h-10 bg-slate-300 rounded-full p-2"
                  src="square.png"
                  alt="correct"
                />
                <div>
                  <p className="font-bold">{data.currentScore}/15</p>
                  <p className="text-sm text-slate-500">CORRECT ANSWER</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-2 rounded-md p-2 items-center m-5 justify-around bg-white">
          <div>
            <Chart data={data} />
          </div>
        </div>
    </div>
  );
};

export default Main;

const express = require("express");
const modal = require("../model/model.js");
const JWT = require("jsonwebtoken");
const cookie = require("cookie-parser");

var data = [];
const firstApi = (req, res) => {
  console.log("Steve Harrington...");
};

const adder = async (req, res) => {
  try {
    console.log(req.body);
    console.log(typeof modal.create);

    const result = await modal.create(req.body);

    // data.push(req.body);
  } catch (err) {
    console.log(err);
  }
};

const generateToken = async (req, res) => {
  try {
    const jwt_token = JWT.sign(
      {
        userid: "PeterParker@gwenStacy",
      },
      "Green-Goblin",
      {
        expiryIn: "7s",
      },
    );
    res.cookie("token", jwt_token, {
      httpOnly: true,
      secure: false,
      sameSize: "lex",
      maxAge: 7 * 1000,
    });

    return res.status(200).json("Done");
  } catch (err) {
    return res.status(400).json(err);
  }
};

exports.firstApi = firstApi;
exports.adder = adder;
exports.generateToken = generateToken.Token;

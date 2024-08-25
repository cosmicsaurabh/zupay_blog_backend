const User = require("../models/user")
const Blog = require("../models/blogModel")



exports.createBlog = async (req,res,next)=>{
    const blog = await Blog.create(req.body);

    res.status(201).json({
        success:true,
        blog
    })
}

exports.getAllBlogs = async (req, res)=>{

    const blogs = await Blog.find();

    res.status(200).json({
        success:true,
        blogs
    });
}

exports.getBlog = async (req, res)=>{
  const id = req.params.id;
  const blog = await Blog.findById(id);
  
  res.status(200).json({
    success:true,
    blog
  })
}


exports.deleteBlog = async (req, res)=>{
  const id = req.params.id;
  const blog = await Blog.findByIdAndDelete(id);
  if(!blog){
    res.status(404).json({
      success:false,
      message: "Blog not found"
    });
  }
  else{
    res.status(200).json({
      success:true,
      blog
    })
  }
}

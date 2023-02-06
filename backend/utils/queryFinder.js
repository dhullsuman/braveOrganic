class QueryFinder{
    constructor(collection,query){
        this.collection=collection;       // product.find
        this.query=query; //req.query
    }

    search(){
        const keyword=this.query.keyword ?{
            title:{
                $regex:this.query.keyword,
                $options:"i"
            }
        }:{};
        this.collection=this.collection.find({...keyword});
        return this
    }

    sort(){
        if(this.query.sort && this.query.sort === "LTH"){
            this.collection = this.collection.find().sort({price : 1});
            return this;
        }else if(this.query.sort && this.query.sort === "HTL"){
            console.log("in the decending if");
            this.collection = this.collection.find().sort({price : -1});
            return this;
        }else if(this.query.sort && this.query.sort === "reset"){
            this.collection = this.collection.find();
            return this;
        }else{
            this.collection = this.collection;
            return this;
        }
    }

  

    filter(){
        const queryCopy={...this.query};
        // Removing some fields for category
        const removeFields=["keyword","page","limit"];
        removeFields.forEach(ele=>delete queryCopy[ele]);
        // filter for price and rating
        let query=JSON.stringify(queryCopy)
        query=query.replace(/\b(gt|gte|lt|lte)\b/g,(ele)=>`$${ele}`);

        this.collection = this.collection.find(JSON.parse(query));
        return this
    }

    pagination(limit){
        const currentPage=Number(this.query.page)||1;
        const skip=limit*(currentPage-1);
        this.collection=this.collection.limit(limit).skip(skip)
        return this
    }
}

module.exports=QueryFinder
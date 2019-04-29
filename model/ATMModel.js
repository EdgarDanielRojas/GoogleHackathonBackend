
const {Datastore} = require('@google-cloud/datastore');
const Storage = require('@google-cloud/storage');

const datastore = new Datastore();
const storage = new Storage();

class ATMModel{
    constructor(db){
        this.db = db;
    }

    insertImage(image){
         const bucketName = 'gugle-champ3-bucket';
         const filename = fileobject.path;

// Uploads a local file to the bucket
         return storage
            .bucket(bucketName)
            .upload(filename);
    }

    async createReport(report,result){
        var image = 'noimage.jpg';
        if("atmImage" in report.image){
            var fileObject = report.image.atmImage[0];
            await this.insertImage(fileObject);
            image = fileObject.originalname;
            /*
            if(!fs.existsSync("./uploads/cowImages/")){
                fs.mkdirSync("./uploads/cowImages/");
            }
            var pathvar = "./uploads/cowImages/"+ cow.earringId + path.extname(fileObject.originalname);
            console.log(pathvar);
            fs.renameSync(fileObject.path, pathvar);
            extension = path.extname(fileObject.originalname);*/
            // Filestore logic
            //image = result;
        }
        report.image = image;
        datastore.save({
            key: datastore.key('report'),
            data: report,
        });

        /*this.db.query(insertSQL,params,function(err,res){
            if(err){
                console.log(err);
                result(err,null);
            }else{
                result(null,res);
            }
        });*/
    }
}

module.exports = ATMModel

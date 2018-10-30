import React from 'react';
import './ImageUploader.scss';
import { conditionShow } from '../../util/render';



const typesSupported = [
    'image/jpeg',
    'image/jpg',
    'image/png',
];

class ImageUploader extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            preview: undefined
        };
        this.upload = this.upload.bind(this);
        this.showPerview = this.showPerview.bind(this);
        this.logDetail = this.logDetail.bind(this);
    }

    // 触发上传
    upload(e){
        const file = e.target.files[0];

        var reader = new FileReader();
        reader.readAsDataURL(file);

        this.logDetail(file);

        reader.onload = (e)=>{
            this.showPerview(e.target.result);
            if(this.props.onChange){
                this.props.onChange(file, e.target.result);
            }
        }
    }

    // 展示预览
    showPerview(preview){
        this.setState({
            preview
        })
    }


    // 文件详情
    logDetail(file){
        const { name, size, type } = file;

        // 格式
        if(typesSupported.indexOf(type) === -1 ){
            console.log('格式不支持');
            return;
        }
        // 文件名
        console.log(`文件名：${name}`);
        console.log(`大小：${(size / 1024).toFixed(2)}kb`);
    }

    render(){
        const { preview } = this.state;
        return (
            <div className="image-uploader">
                <label htmlFor="upload"></label>
                <input
                    hidden
                    id="upload"
                    type="file"
                    accept="image/*"
                    onChange={ this.upload }
                    />
                <div className="img-preview">
                    {
                        conditionShow(preview, <img src={ preview } alt="preview" />)
                    }
                </div>
            </div>
        )
    }
}

export default ImageUploader;
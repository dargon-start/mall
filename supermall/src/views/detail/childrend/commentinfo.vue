<template>
    <div id="comment" v-if="Object.keys(commentData).length !==0">
        <div class="comment-title"> 
            <span>用户评价</span>
            <span>更多</span>
        </div>
        <div class="info-user">
            <img :src="commentData.user.avatar" alt="">
            <div>{{commentData.user.uname}}</div>
        </div>
        <div class="info-detail">
            <p>{{commentData.content}}</p>
            <div class="info-other">
                <span>{{creatDate}}</span>
                <span>{{commentData.style}}</span>
            </div>
            <div class="info-img">
                <img v-for="item in commentData.images" :key="item" :src="item" alt="">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        commentData:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    computed: {
        creatDate () {
             const date=new Date(this.commentData.created*1000);
             return this.FormData(date,'yyyy/MM/dd:HH:mm:ss');
        }
    },
    methods: {
         //时间戳转日期格式
         FormData :function(time, format){
            var t = new Date(time);
            var tf = function(i){return (i < 10 ? '0' : '') + i};
            return format.replace(/yyyy|MM|dd|HH|mm|ss/g, function(a){
                switch(a){
                    case 'yyyy':
                        return tf(t.getFullYear());
                        break;
                    case 'MM':
                        return tf(t.getMonth() + 1);
                        break;
                    case 'mm':
                        return tf(t.getMinutes());
                        break;
                    case 'dd':
                        return tf(t.getDate());
                        break;
                    case 'HH':
                        return tf(t.getHours());
                        break;
                    case 'ss':
                        return tf(t.getSeconds());
                        break;
                }
            })
        }

    }
     
    


}
</script>
<style>
#comment{
    width: 100%;
    margin-top: 10px;
    background: #fff;
}
.comment-title{
display: flex;
justify-content: space-between;
}
.comment-title span{
    
    display: inline-block;
    width: 80px;
    height: 20px;
    font-size: 16px;
    padding: 20px 5px;
    text-align: center;
}
.info-user{
    margin-top: 20px;
    height: 50px;
    overflow: hidden;
    box-sizing:border-box;
}
.info-user img{
    float: left;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin: 5px 20px;
}
.info-user div{
    float: left;
    line-height: 40px;
    padding: 5px;
}
.info-detail{
    height: auto;
    margin-top: 15px;
}
.info-detail p{
    padding-left: 10px;
}
.info-other span{
    display: inline-block;
    margin: 5px 10px;
    font-size: 14px;
    color: #a0a0a0;
}
.info-img {
    width: 100%;
}
.info-img img{
    width: 30%;
    margin: 5px;
    border-radius: 10px;
}
</style>

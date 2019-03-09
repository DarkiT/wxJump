<template>
    <el-tabs v-model="activeName">
        <el-tab-pane label="主库域名" name="first" :lazy="true">
            <first></first>
        </el-tab-pane>
        <el-tab-pane label="备用域名" name="second" :lazy="true">
            <back></back>
        </el-tab-pane>
        <el-tab-pane v-if="notify" label="文章更新通知地址" name="Third" :lazy="true">
            <notify></notify>
        </el-tab-pane>
    </el-tabs>
</template>
<script>
    import first from './main/main'
    import back from './backups/backups'
    import notify from './notify/notify'
    export default {
        components: {first, back, notify},
        data() {
            return {
                activeName: 'first',
                notify:false
            };
        },
        created(){
            this.$store.state.user.auth.url.forEach((item)=>{
                if (item == 'notify') {
                    this.notify = true;
                }
            });
        }
    };
</script>
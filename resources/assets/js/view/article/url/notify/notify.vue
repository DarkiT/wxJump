<template>
    <div style="width:35%">
        <el-form :model="dynamicValidateForm" ref="dynamicValidateForm" >
            <el-form-item
                    v-for="(domain, index) in dynamicValidateForm.domains"
                    :label="'域名' + (index+1)"
                    :key="domain.key"
                    :prop="'domains.' + index + '.value'"
                    :rules="{required: true, message: '域名'+(index+1)+'不能为空', trigger: 'blur'}">
                <el-input style="width: 70%" v-model="domain.value"></el-input>
                <el-button @click.prevent="removeDomain(domain)">删除</el-button>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('dynamicValidateForm')">提交</el-button>
                <el-button @click="addDomain">新增域名</el-button>
            </el-form-item>
        </el-form>

    </div>
</template>

<script>
    import {notifyUrl, notifyList} from '@/api/article'

    export default {
        data() {
            return {
                dynamicValidateForm: {
                    domains: [],
                }
            };
        },
        created(){
            notifyList().then((response)=>{
                response.data.data.forEach((item)=>{
                    this.dynamicValidateForm.domains.push({
                        value:item.value
                    })
                })
            })
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        notifyUrl({domains: this.dynamicValidateForm.domains}).then((response) => {
                            this.$message.success(response.data.msg);
                        })
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
            removeDomain(item) {
                var index = this.dynamicValidateForm.domains.indexOf(item);
                if (index !== -1) {
                    this.dynamicValidateForm.domains.splice(index, 1)
                }
            },
            addDomain() {
                this.dynamicValidateForm.domains.push({
                    value: '',
                    key: Date.now()
                });
            }
        }
    }
</script>

<style scoped>

</style>
class ApiResponse{
    constructor(statuCode,message="Success"){
         this.statuCode=statuCode
         this.data=this.data
         this.message=message
         this.success=statuCode<400
    }
}
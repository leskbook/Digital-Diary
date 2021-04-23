module.exports=function(sequelize,DataTypes){
    const Memories=sequelize.define('Memories',{
        description:
        {
            type: DataTypes.STRING,
            allowNull: false
    },
       	title:{
            type: DataTypes.STRING,
            allowNull: false
        },
        imageurl:
        {
            type:DataTypes.STRING
        }
    });
    return Memories;
}
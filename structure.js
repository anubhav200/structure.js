/**
 * Created with JetBrains WebStorm.
 * User: Anubhav
 * Date: 2/16/13
 * Time: 12:01 AM
 * To change this template use File | Settings | File Templates.
 */
window.onload=function()
{
    //alert("loaded");
    var body=document.getElementById("mainDiv");
    var el=new quickCreate();
    el.createStructureObject(test_JSON2,body);
    //el.getWrapped()

}



function quickCreate()
{
    this.DEFAULT_TAG=undefined;
    this.DEFAULT_DATA={};

    this.createStructure=function(innerData,parent)
    {
        for(var i in innerData)
        {
            var element=document.createElement(innerData[i]["tag"]);

            for(var prop in innerData[i])
            {
                switch(prop)
                {
                    case "tag":
                    case "children":break;
                    default:element[prop]=innerData[i][prop];
                            break;
                }


            }
            if(innerData[i]["children"])
            {
                this.createStructure(innerData[i]["children"],element);
            }
            parent.appendChild(element);
        }
    }

    this.createStructureObject=function(innerData,parent)
    {
        if(innerData[0])//check if array
        {
            for(var i in innerData)
            {

                parent[innerData[i]["id"]]=document.createElement(innerData[i]["tag"]||this.DEFAULT_TAG);

                for(var prop in innerData[i])
                {
                    switch(prop)
                    {
                        case "tag":
                        case "children":break;
                        default:alert(typeof(innerData[i][prop])+"\nkey:"+prop+"\nvalue:"+innerData[i][prop]);
                            parent[innerData[i]["id"]][prop]=innerData[i][prop];
                                  break;
                    }


                }
                if(innerData[i]["children"])
                {
                    this.createStructureObject(innerData[i]["children"],parent[innerData[i]["id"]]);
                }
                parent.appendChild(parent[innerData[i]["id"]]);
            }
        }
        else//if object
        {
            parent[innerData["id"]]=document.createElement(innerData["tag"]||this.DEFAULT_TAG);

            for(var prop in innerData)
            {
                switch(prop)
                {
                    case "tag":
                    case "children":break;
                    default:alert(typeof(innerData[prop])+"\nkey:"+prop+"\nvalue:"+innerData[prop]+"\n isArray:"+Array.isArray(innerData[prop]));
                        parent[innerData["id"]][prop]=innerData[prop];
                             break;
                }


            }
            if(innerData["children"])
            {
                this.createStructureObject(innerData["children"],parent[innerData["id"]]);
            }
            parent.appendChild(parent[innerData["id"]]);
        }

    }

    this.getWrapped=function(tag,innerData,attributes){
        tag=tag||this.DEFAULT_TAG;
        var element=document.createElement(tag);
        for(var attr in attributes)
        {
            element[attr]=attributes[attr];
        }
        this.createStructure(innerData,element);
        return element;

    }


}

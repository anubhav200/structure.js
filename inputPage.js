
var test_JSON=
    [
        {
            tag:"div",
            id:"div_parent_1",
            innerHTML:"MainDev",
            children:[
                {
                    tag:"div",
                    id :"div_child",
                    innerHTML:"subDev",
                    children:[
                        {
                            tag:"h1",
                            id:"h1_type",
                            innerHTML:"Heading"
                        },
                        {
                            tag:"h2",
                            id:"h2_type",
                            innerHTML:"Heading2"
                        }
                    ]

                }
            ]

        },
        {
            tag:"div",
            id:"div_parent_2",
            innerHTML:"Div2",
            children:[
                {
                    tag:"p",
                    id:"h1_child",
                    innerHTML:"Heading_div2"
                }
            ]
        },
        {
            tag:"select",
            id:"select_id",
            children:[
                {
                    tag:"option",
                    value:"anubhav",
                    text:"1"
                },
                {
                    tag:"option",
                    value:"anubhav1",
                    innerHTML:"12"
                },
                {
                    tag:"option",
                    value:"anubhav3",
                    innerHTML:"123"
                }

            ]
        }

    ]


var test_JSON2={
    id:"div_parent_1",
    innerHTML:"MainDev",
    div:[
        {
            id:"div1",
            innerHTML:"testDev"
        },
        {
            id:"div1",
            innerHTML:"testDev"
        }
    ],
    h1:{
        id:"h1_id",
        innerHTML:"html test"
    },
    children:[
        {
            tag:"h1",
            id:"h1_tag",
            innerHTML:"tag1"
        },
        {
            tag:"h2",
            id:"h22_tag",
            innerHTML:"tag2"
        }
    ]
};

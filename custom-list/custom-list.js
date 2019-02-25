wp.blocks.registerBlockType('zack/custom-list', {
    title: 'Custom List',
    icon: 'editor-ul',
    category: 'common', 
    attributes: {
        header: {
            header: {type: 'string'},
        }, 

        listItem: {
            listItem: {type: 'string'},
        },
        
    },
    edit: function(props){
        function updateHeader(event){
            props.setAttributes({header: event.target.value})
        }
        function updateList(event){
            props.setAttributes({listItem: event.target.value})
        }

        // *** LIST FUNCTIONS ***
        function generateList(event){
            // ska köras så många rabrytningar som finns
            console.log(event)
            let wpList = createList()
        }
        function bulletItems(){
            //Ska ta raden av arrayen
            function setList(){
                let el = document.getElementById('listInput');
                el = el.value;
                console.log(el)
    
                // props.setAttributes({showPicture: img});
                // variabeln som va i li: props.attributes.listItem
            
            }

        }
        
        //GENERERAR LI OCH ELEMENTEN INUTI
        function createEl(){
            let element = "wp.element.createElement(" + type + attributes + content + ")"
        }
        function setType(){
            let type = "li"
        }
        function setAttributes(){
            let attributes = null
        }
        
        function createList(){
            let element = createEl()
            let type = setType()
            let attributes = setAttributes()
            let listItem = setList()
            
            
            let list = wp.element.createElement(
                "li", 
                null, 
                props.attributes.listItem
            )
        }

        return wp.element.createElement(
            "div",
            null,
            wp.element.createElement("h5", null, "Header"),
            wp.element.createElement("input", {
              type: "text",
              value: props.attributes.header,
              onChange: updateHeader
            }),
            wp.element.createElement("h5", null, "List Items"),
            wp.element.createElement("textarea", {
              type: "text",
              id: "listInput",
              value: props.attributes.listItem,
              onChange: setList, updateList
            }),
        );
        
            
    },
    save: function(props){
        return wp.element.createElement(
            "div", 
            {
                class: "col-md-8, col-lg-8, col-xl-9, order-2, order-md-1"
            },
            wp.element.createElement(
                "div", 
                {
                    class: "card"
                },
                wp.element.createElement(
                    "div", 
                    {
                        class: "card-body"
                    },
                    wp.element.createElement(
                        "div", 
                        {
                            class: "row, justify-content-center"
                        },
                        wp.element.createElement(
                            "div", 
                            {
                                class: "col-12, col-md-11, col-xl-10"
                            },
                            wp.element.createElement(
                                "h3", 
                                null, 
                                props.attributes.header
                                ),
                            wp.element.createElement(
                                "div",
                                {
                                    class: "custom-row"
                                },
                                wp.element.createElement(
                                    "div",
                                    {
                                        class: "column, custom-block-avatar",
                                    },
                                    wp.element.createElement("p", null, props.attributes.header),
                                    wp.element.createElement(
                                        "ul", 
                                        null, 
                                        
                                    )
                                )
                            )

                        )
        
                    )
    
                )

            )

        )
               
    }
})
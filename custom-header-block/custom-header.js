wp.blocks.registerBlockType('zack/custom-header', {
    title: 'Custom Header',
    icon: 'editor-textcolor',
    category: 'common', 
    attributes: {
        header: {
            header: {type: 'string'},
        }, 

        
    },
    edit: function(props){
        function updateHeader(event){
            props.setAttributes({header: event.target.value})
        }

        return wp.element.createElement(
            "div",
            null,
            wp.element.createElement("h5", null, "Header"),
            wp.element.createElement("input", {
              type: "text",
              value: props.attributes.header,
              onChange: updateHeader
            })
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
                            wp.element.createElement("h3", null, props.attributes.header)
                        )
        
                    )
    
                )

            )

        )
               
    }
})
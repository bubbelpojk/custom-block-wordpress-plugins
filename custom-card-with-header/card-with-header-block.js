wp.blocks.registerBlockType('zack/card-with-header-block', {
    title: 'Card with Header Block',
    icon: 'dashicons-admin-page',
    category: 'common', 
    attributes: {
        
        title: {
            title: {type: 'string'},
        }, 

        content: {
            content: {type: 'string'},
        },

    },
    edit: function(props){

        function updateTitle(event){
            props.setAttributes({title: event.target.value})
        }
        function updateContent(event){
            props.setAttributes({content: event.target.value})
        }

        return wp.element.createElement(
            "div",
            null,
            wp.element.createElement("h5", null, "Title"),
            wp.element.createElement("input", {
              type: "text",
              value: props.attributes.title,
              onChange: updateTitle
            }),
            wp.element.createElement("h5", null, "Description"),
            wp.element.createElement("textarea", {
              type: "text",
              value: props.attributes.content,
              onChange: updateContent
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
                            wp.element.createElement(
                                "h3",
                                null,
                                props.attributes.title

                            ),
                            wp.element.createElement(
                                "p",
                                {
                                    style: {whiteSpace: "pre-line"}
                                },
                                props.attributes.content

                            )
                        )
        
                    )
    
                )

            )

        )
    
               
    }
})


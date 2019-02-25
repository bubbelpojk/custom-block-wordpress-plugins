wp.blocks.registerBlockType('zack/card-block', {
    title: 'Card Block',
    icon: 'dashicons-admin-page',
    category: 'common', 
    attributes: {
        
        content: {
            content: {type: 'unknown'},
        },

        output: {
            output: {type: 'unknown'}
        }

    },
    edit: function(props){

        function updateContent(event){
            let hello = nl2br (props.attributes.content);
            props.setAttributes({content: event.target.value})
            console.log(event)
            console.log(props.attributes.content)
            props.attributes.content = hello;
            console.log(props.attributes.content);
            console.log(props.attributes.output);
            console.log(hello)
            
        }

        function nl2br (str, is_xhtml) {
            if (typeof str === 'undefined' || str === null) {
                return '';
            }
            var breakTag = (is_xhtml || typeof is_xhtml === 'undefined') ? '<br />' : '<br>';
            return (str + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1' + breakTag + '$2');
        }

        return wp.element.createElement(
            "div",
            null,
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
                                "p", 
                                {
                                    class: "br",
                                    style: {whiteSpace: "pre-line"}
                                },
                                props.attributes.content,
                                )
                        )
        
                    )
    
                )

            )

        )
    
               
    }
})


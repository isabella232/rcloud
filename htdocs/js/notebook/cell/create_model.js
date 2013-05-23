Notebook.Cell.create_model = function(content, language)
{
    var result = {
        views: [], // sub list for pubsub
        language: function() {
            return language;
        },
        content: function(new_content) {
            if (!_.isUndefined(new_content)) {
                content = new_content;
                notify_views();
            }
            return content;
        },
        json: function() {
            return {
                content: content,
                language: language
            };
        }
    };
    function notify_views() {
        _.each(result.views, function(view) {
            view.content_updated();
        });
    }
    return result;
};

import $ from 'jquery';
import React from 'react';

class PluginsGrid extends React.Component {
  loadPluginsData() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  }

  getInitialState() {
    return {data: []};
  }

  componentDidMount() {
    this.loadPluginsData();
  }

  render() {

    var PluginNodes = this.state.data.map(function(plugin) {
      return (
        <div class="three columns"><a href="{plugin.url}" class="plugin"><img src="{plugin.src}" alt="{plugin.alt}"/></a></div>
      );
    });

    return (
      <div class="twelve columns main-content">
        {PluginNodes}
      </div>
    );
  }
}

React.render(<PluginsGrid url="plugins.json"/>, document.getElementById('PluginsGrid'));

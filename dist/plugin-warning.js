define("{seajs}/plugin-warning",[],function(){var b=seajs.pluginSDK.Module,f=b._save;b._save=function(c,b){if(d.test(c)){var a=c.replace(d,"{{version}}"),a=e[a]||(e[a]=[]);a.push(c);1<a.length&&seajs.log("WARNING: This module has multiple versions:\n"+a.join("\n"),"warn")}f(c,b)};var e={},d=/(?:\d+\.)+\d+/});seajs.use("{seajs}/plugin-warning");

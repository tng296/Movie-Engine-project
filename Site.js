var $ID = function(id)
{
  return document.getElementById(id);
}

var $NAME = function(name)
{
  return document.getElementsByName(name);
}

var $CLASS = function(className)
{
  return document.getElementsByClassName(className);
}

var $TAG = function(tag)
{
  return document.getElementsByTagName(tag);
}

var $TAGSPECIAL = function(tagSpecial)
{
  return document.getElementsByTagNameNS(tagSpecial);
}
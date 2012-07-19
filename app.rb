require 'sinatra'
require 'slim'

neo = Neography::Rest.new(ENV['NEO4J_URL'] || "http://localhost:7474")

get '/' do
	slim :index
end

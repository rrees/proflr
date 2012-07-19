require 'sinatra'
require 'slim'
require 'neography'

neo = Neography::Rest.new(ENV['NEO4J_URL'] || "http://localhost:7474")

get '/' do
	slim :index
end

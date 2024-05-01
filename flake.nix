{
  description = "Bachrc.net";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";

    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
    let
      pkgs = import nixpkgs {
        inherit system;
      };

      devDependencies = with pkgs; [
        nil
        typescript
      ];

      buildInputs = with pkgs; [
        just
        nodejs_20
      ];
    in
    {
      # run with `nix develop`
      devShells = {
        default = with pkgs; mkShell {
          buildInputs = [ buildInputs devDependencies ];
        };
      };
    });
}
